const fs = require('fs/promises');
const yaml = require('yaml');
const _ = require('lodash');
const csso = require('csso');
const jsonMin = require('jsonminify');

const getFontFormat = require('./getFontFormat');
const faceGen = require('./faceGen');

(async () => {
  // read fonts data file
  const rawFonts = await (
    await fs.readFile('./fonts.yml', { encoding: 'utf-8' })
  ).toString();

  // parse
  const fonts = yaml.parse(rawFonts).fonts.map(font => {
    font.files = font.files.map(
      src =>
        `https://cdn.jsdelivr.net/gh/naen-nae/naen-nae/public/fonts/${src.replace(
          /^\//,
          '',
        )}`,
    );

    return font;
  });

  // get font-faces
  const faceOptions = _.flatMap(fonts, ({ files, fontWeights, fontFamily }) =>
    _.map(_.zip(files, fontWeights), ([src, fontWeight]) => ({
      src,
      fontWeight,
      fontFamily,
      format: getFontFormat(src),
    })),
  );

  const faces = _.flow(
    _.partial(_.map, _, faceGen),
    _.partial(_.join, _, ''),
    csso.minify,
    _.partial(_.pick, _, 'css'),
  )(faceOptions).css;

  const stringFonts = jsonMin(JSON.stringify(fonts));

  // write to file
  await fs.writeFile('./public/fonts.json', stringFonts, {
    encoding: 'utf8',
    flag: 'w',
  });

  await fs.writeFile('./public/faces.css', faces, {
    encoding: 'utf8',
    flag: 'w',
  });
})();
