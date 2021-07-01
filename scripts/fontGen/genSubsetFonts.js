const fs = require('fs/promises');
const _ = require('lodash');
const subsetFont = require('subset-font');

const genNewDir = require('./genNewDir');
const getFontsObj = require('./getFontsObj');

// gen subset-fonts
(async () => {
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
