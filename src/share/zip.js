import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import _ from 'lodash';

/**
 * create a zip file with fetching
 *
 * @param {[String]} urls file url array
 * @param {Object} options
 * @param {[String]} fileNames file content names
 * @param {String} zipName zip file name
 */
export default async (urls, { fileNames, zipName } = {}) => {
  const resps = await Promise.all(_.map(urls, async url => await fetch(url)));
  const zip = new JSZip();

  for (const [resp, name] of _.zip(resps, fileNames ?? urls)) {
    zip.file(name, await resp.blob());
  }

  return saveAs(
    await zip.generateAsync({ type: 'blob' }),
    zipName ?? 'file.zip',
  );
};
