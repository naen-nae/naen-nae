const FONT_FILE_BASE = 'https://cdn.jsdelivr.net/gh/naen-nae/fonts/build/';

export const reqFontFace = (family: string) =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async resolve => {
    if (!window) {
      resolve(false);
      return;
    }

    const src = `${FONT_FILE_BASE}/subset-css/${family}.css`;
    (await import('webfontloader')).load({
      fontactive: resolve,
      fontinactive: resolve,
      custom: {
        families: [family],
        urls: [src],
      },
    });
  });
