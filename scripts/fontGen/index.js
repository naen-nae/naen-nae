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
  const allFaceOptions = _.flatMap(
    fonts,
    ({ files, fontWeights, fontFamily }) =>
      _.map(_.zip(files, fontWeights), ([src, fontWeight]) => ({
        src,
        fontWeight,
        fontFamily,
        format: getFontFormat(src),
      })),
  );

  const faceOptionsGroupByFamily = _.groupBy(
    allFaceOptions,
    ({ fontFamily }) => fontFamily,
  );

  const getFaces = _.flow(
    _.partial(_.map, _, faceGen),
    _.partial(_.join, _, ''),
    csso.minify,
    ({ css }) => css,
  );

  const allFaces = getFaces(allFaceOptions);
  const facesByFamily = _.map(faceOptionsGroupByFamily, (options, name) => [
    name,
    getFaces(options),
  ]);

  const stringFonts = jsonMin(JSON.stringify(fonts));

  // write to file
  fs.writeFile('./public/fonts.json', stringFonts);

  fs.writeFile('./public/faces.css', allFaces);

  fs.mkdir('./public/css');

  _.forEach(facesByFamily, ([name, css]) =>
    fs.writeFile(`./public/css/${name}.css`, css),
  );
})();
