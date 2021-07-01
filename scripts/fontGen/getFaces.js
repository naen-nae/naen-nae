const minify = require('minify-css-string');
const _ = require('lodash');
const faceGen = require('./faceGen');

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
module.exports = _.flow(
  _.partial(_.map, _, faceGen),
  _.partial(_.join, _, ''),
  minify.default,
);
