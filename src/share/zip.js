import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import _zip from 'lodash/zip';

/**
 * create a zip file with fetching
 *
 * @param {Object} options
 * @param {[Blob]} blobs file chunks
 * @param {[String]} names file names
 * @param {String} zipName zip file name
 * @param {Function} progressCb progress callback
 */
export default async ({ blobs, names, zipName, progressCb } = {}) => {
  if (blobs === undefined || blobs.length === 0) {
    throw new Error('Cannot find blob datas');
  }

  const zip = new JSZip();

  for (const [blob, name] of _zip(
    blobs,
    names ??
      Array(blobs.length) // gen temp file name
        .fill(0)
        .map((v, ind) => ind),
  )) {
    zip.file(name, blob);
  }

  return saveAs(
    await zip.generateAsync(
      { type: 'blob', streamFiles: true },
      progressCb ?? (() => {}),
    ),
    zipName ?? 'file.zip',
  );
};
