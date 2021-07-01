const fs = require('fs/promises');
const _ = require('lodash');
const jsonMin = require('jsonminify');

const getFontFormat = require('./getFontFormat');
const toCdnSrc = require('./toCdnSrc');
const getFaces = require('./getFaces');
const genNewDir = require('./genNewDir');
const getFontsObj = require('./getFontsObj');

// gen fonts
(async () => {
  // parse
  const fonts = _.flow(
    fonts =>
      fonts.sort(({ author: authorA }, { author: authorB }) =>
        authorA.localeCompare(authorB),
      ),
    _.partial(_.map, _, font =>
      _.set(
        font,
        'files',
        _.map(font.files, path => toCdnSrc(`fonts/${path}`)),
      ),
    ),
  )(await getFontsObj());

  // gen font face options
  const faceOptions = _.flatMap(fonts, ({ files, fontWeights, fontFamily }) =>
    _.map(_.zip(files, fontWeights), ([src, fontWeight]) => ({
      src,
      fontWeight,
      fontFamily,
      format: getFontFormat(src),
    })),
  );

  const faceOptionsGroupByFamily = _.groupBy(
    faceOptions,
    ({ fontFamily }) => fontFamily,
  );

  // gen font faces
  const facesByFamily = _.map(faceOptionsGroupByFamily, (options, name) => [
    name,
    getFaces(options),
  ]);

  // write to files
  fs.writeFile('./public/fonts.json', jsonMin(JSON.stringify(fonts)));

  await genNewDir('css');
  _.forEach(facesByFamily, ([name, css]) =>
    fs.writeFile(`./public/css/${name}.css`, css),
  );
})();

// gen subset font-faces
(async () => {
  const fonts = _.map(await getFontsObj(), font =>
    _.set(
      font,
      'files',
      _.map(font.files, path => toCdnSrc(`subset-fonts/${path}`, 'gh-pages')),
    ),
  );

  const faceOptions = _.flatMap(fonts, ({ files, fontWeights, fontFamily }) =>
    _.map(_.zip(files, fontWeights), ([src, fontWeight]) => ({
      src: `${src}.woff2`,
      fontWeight,
      fontFamily,
      format: 'woff2',
    })),
  );

  const faceOptionsGroupByFamily = _.groupBy(
    faceOptions,
    ({ fontFamily }) => fontFamily,
  );

  const facesByFamily = _.map(faceOptionsGroupByFamily, (options, name) => [
    name,
    getFaces(options),
  ]);

  await genNewDir('subset-css');
  _.forEach(facesByFamily, ([name, css]) =>
    fs.writeFile(`./public/subset-css/${name}.css`, css),
  );
})();
