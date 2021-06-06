/**
 * get font format
 *
 * @param {String} file file src
 * @return {String} file format
 */
module.exports = file => {
  const extRE = file.match(/.*\.(.+?)$/);

  if (extRE === null) {
    throw new Error('failed to getting the file extension');
  }

  const ext = extRE[1];

  if (ext === 'ttf') {
    return 'truetype';
  } else if (ext === 'woff') {
    return 'woff';
  } else if (ext === 'woff2') {
    return 'woff2';
  } else if (ext === 'otf') {
    return 'opentype';
  } else if (ext === 'eot') {
    return 'embedded-opentype';
  } else if (ext === 'svg') {
    return 'svg';
  } else {
    return '';
  }
};
