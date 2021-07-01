/**
 * to jsdelivr cdn src
 *
 * @param {String} src origin src
 * @param {String} branch repo branch name
 * @returns cdn src
 */
module.exports = (src, branch) =>
  `https://cdn.jsdelivr.net/gh/naen-nae/naen-nae${
    branch !== undefined ? `@${branch}` : ''
  }/${src.replace(/^\//, '')}`;
