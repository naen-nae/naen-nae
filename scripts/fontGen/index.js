const fs = require('fs/promises');
const yaml = require('yaml');
const _ = require('lodash');
const minify = require('minify-css-string');
const jsonMin = require('jsonminify');

const getFontFormat = require('./getFontFormat');
const faceGen = require('./faceGen');

const CHUNK_SIZE = 20;

/**
 * to jsdelivr cdn src
 *
 * @param {String} src origin src
 * @returns cdn src
 */
const toCdnSrc = src =>
  `https://cdn.jsdelivr.net/gh/naen-nae/naen-nae/fonts/${src.replace(
    /^\//,
    '',
  )}`;

/**
 * generate font faces
 *
 * @param {[Object]} faceOption
 * @param {String} faceOption.src font file src
 * @param {String} faceOption.fontWeight font weight
 * @param {String} faceOption.fontFamily font family
 * @param {String} faceOption.format font format
 * @returns {String} minified face-face css string array
 */
const getFaces = _.flow(
  _.partial(_.map, _, faceGen),
  _.partial(_.join, _, ''),
  minify.default,
);

/**
 * generate a new directory
 *
 * @returns {Promise<void>}
 */
const genNewDir = async name => {
  try {
    await fs.access(`./public/${name}`);
    await fs.rm(`./public/${name}`, {
      recursive: true,
      force: true,
    });
  } catch {
    // nothing
  }

  await fs.mkdir(`./public/${name}`);
};

(async () => {
  // read fonts data file
  const rawFonts = await (
    await fs.readFile('./fonts.yml', { encoding: 'utf-8' })
  ).toString();

  // parse
  const fontsChunk = _.flow(
    _.partial(_.map, _, font =>
      _.set(font, 'files', _.map(font.files, toCdnSrc)),
    ),
    _.partial(_.chunk, _, CHUNK_SIZE),
  )(yaml.parse(rawFonts).fonts);

  // gen font face options
  const faceOptionsChunk = _.map(fontsChunk, fonts =>
    _.flatMap(fonts, ({ files, fontWeights, fontFamily }) =>
      _.map(_.zip(files, fontWeights), ([src, fontWeight]) => ({
        src,
        fontWeight,
        fontFamily,
        format: getFontFormat(src),
      })),
    ),
  );

  const faceOptions = _.flatten(faceOptionsChunk);

  const faceOptionsGroupByFamily = _.groupBy(
    faceOptions,
    ({ fontFamily }) => fontFamily,
  );

  // gen font faces
  const facesChunk = _.map(faceOptionsChunk, getFaces);
  const facesByFamily = _.map(faceOptionsGroupByFamily, (options, name) => [
    name,
    getFaces(options),
  ]);

  // gen env
  const env = {
    faces: fontsChunk.length,
    allFontsLength: _.flatten(fontsChunk).length,
  };

  // write to files
  await genNewDir('fonts');
  await genNewDir('faces');
  await genNewDir('css');

  fs.writeFile('./public/env.json', jsonMin(JSON.stringify(env)));

  _.forEach(fontsChunk, (fonts, ind) =>
    fs.writeFile(
      `./public/fonts/fonts-${ind}.json`,
      jsonMin(JSON.stringify(fonts)),
    ),
  );

  _.forEach(facesChunk, (faces, ind) =>
    fs.writeFile(`./public/faces/faces-${ind}.css`, faces),
  );

  _.forEach(facesByFamily, ([name, css]) =>
    fs.writeFile(`./public/css/${name}.css`, css),
  );
})();
