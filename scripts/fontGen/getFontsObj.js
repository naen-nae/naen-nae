const fs = require('fs/promises');
const yaml = require('yaml');

/**
 * get fonts object
 */
module.exports = async () => {
  const rawFonts = await (
    await fs.readFile('./fonts.yml', { encoding: 'utf-8' })
  ).toString();

  return yaml.parse(rawFonts).fonts;
};
