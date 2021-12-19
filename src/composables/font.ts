import WebFont from 'webfontloader';

const FONT_FILE_BASE = 'https://cdn.jsdelivr.net/gh/naen-nae/fonts/build/';

export const reqFontFace = (family: string) =>
  new Promise(resolve => {
    const src = `${FONT_FILE_BASE}/subset-css/${family}.css`;
    WebFont.load({
      fontactive: resolve,
      fontinactive: resolve,
      custom: {
        families: [family],
        urls: [src],
      },
    });
  });
