const fs = require('fs/promises');
const _ = require('lodash');
const jsonMin = require('jsonminify');
const subsetFont = require('subset-font');

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

// gen subset-fonts
(async () => {
  // gen font-faces
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

  // gen subset font files
  await genNewDir('subset-fonts');
  _.map(await getFontsObj(), async ({ files: filePaths }, ind, { length }) => {
    // gen subset dir
    const dir = filePaths[0].split('/')[0];
    await genNewDir(`subset-fonts/${dir}`);

    await _.flow(
      // get font bufs
      _.partial(_.map, _, async filePath => ({
        path: filePath,
        buf: await fs.readFile(`./fonts/${filePath}`),
      })),
      // gen subset bufs
      _.partial(_.map, _, async file => {
        const { path, buf } = await file;

        return {
          path,
          buf: await subsetFont(buf, '다람쥐 헌 쳇바퀴에 타고파', {
            targetFont: 'woff2',
          }),
        };
      }),
      // gen subset font file
      _.partial(_.forEach, _, async subset => {
        const { path, buf } = await subset;
        return fs.writeFile(`./public/subset-fonts/${path}.woff2`, buf);
      }),
    )(filePaths);

    console.log(`>> gen '`, dir, `' fonts (${ind + 1} / ${length})`);
  });
})();
