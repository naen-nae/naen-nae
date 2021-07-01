const fs = require('fs/promises');

/**
 * generate a new directory
 *
 * @returns {Promise<void>}
 */
module.exports = async name => {
  try {
    await fs.access(`./public/${name}`);
    await fs.rm(`./public/${name}`, {
      recursive: true,
      force: true,
    });
  } catch {
    // nothing
  }

  return await fs.mkdir(`./public/${name}`);
};
