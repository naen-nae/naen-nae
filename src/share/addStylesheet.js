import WebFont from 'webfontloader';

/**
 * add a new stylesheet
 *
 * @param {String} familyName name of the font fmaily
 * @param {String} src stylesheet href
 */
export default (familyName, src) =>
  new Promise(resolve =>
    WebFont.load({
      fontactive: resolve,
      fontinactive: resolve,
      custom: {
        families: [familyName],
        urls: [src],
      },
    }),
  );
