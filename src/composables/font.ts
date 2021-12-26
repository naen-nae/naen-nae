import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import axios from 'axios';
import { useSnackbarStore } from 'src/store/snackbar';
import { FONT_DATA_BASE_URL } from 'src/constants';

export const reqFontFace = (family: string, subset?: boolean) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async resolve => {
    if (!window) {
      resolve(false);
      return;
    }

    const src = `${FONT_DATA_BASE_URL}/${
      subset ? 'subset-css' : 'css'
    }/${family}.css`;

    (await import('webfontloader')).load({
      fontactive: resolve,
      fontinactive: resolve,
      custom: {
        families: [family],
        urls: [src],
      },
    });
  });

type ZipProgressCallback = (progress: {
  percent: number;
  currentFile: string;
}) => void;

interface FilesData {
  blobs: Blob[];
  names: (string | undefined)[];
  progressCallback?: ZipProgressCallback;
}

const zipBlobs = ({ blobs, names, progressCallback }: FilesData) => {
  const zip = new JSZip();

  blobs.forEach((blob, ind) => {
    let fileName = names[ind];

    if (!fileName) {
      const ext = blob.type.split('/')[1] ?? 'ttf';
      fileName = `font-${ind}.${ext}`;
    }

    zip.file(fileName, blob);
  });

  return zip.generateAsync(
    { type: 'blob', streamFiles: true },
    progressCallback,
  );
};

export const useDownloadFont = () => {
  const snackbarStore = useSnackbarStore();

  const isDownloading = ref(false);
  const downloadProgress = ref(0);
  const isZipping = ref(false);
  const zipProgress = ref(0);

  const clearDownloadMeta = () => {
    isDownloading.value = false;
    downloadProgress.value = 0;
  };

  const clearZipMeta = () => {
    isZipping.value = false;
    zipProgress.value = 0;
  };

  const downloadFont = async (urls: string[], fontFamily: string) => {
    isDownloading.value = true;
    const progressRatio = 100 / urls.length;
    let blobs: Blob[];

    try {
      blobs = await Promise.all<Blob>(
        urls.map(url =>
          axios.get(url, { responseType: 'blob' }).then(({ data }) => {
            downloadProgress.value += progressRatio;
            return data;
          }),
        ),
      );
    } catch {
      snackbarStore.notify(
        '폰트를 다운로드하지 못했어요. 네트워크 상태를 확인해주세요.',
      );
      return;
    } finally {
      clearDownloadMeta();
    }

    isZipping.value = true;

    const fileNames = urls.map(url => url.match(/.*\/(.*)$/)?.[1]);
    const zipped = await zipBlobs({
      blobs,
      names: fileNames,
      progressCallback: ({ percent }) => {
        zipProgress.value = percent;
      },
    });

    const zipName = `${fontFamily}.zip`;
    saveAs(zipped, zipName);
    clearZipMeta();
  };

  return {
    isDownloading,
    isZipping,
    zipProgress,
    downloadProgress,
    downloadFont,
  };
};
