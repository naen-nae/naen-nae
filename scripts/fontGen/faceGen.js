/**
 * generate a font-face css string
 *
 * @param {Object} options
 * @param {String} src font file src
 * @param {String} fontWeight font weight
 * @param {String} fontFamily font family
 * @param {String} format font format
 * @returns {String} face-face css string
 */
module.exports = ({ src, fontWeight, fontFamily, format }) =>
  `
  @font-face {
    font-family: '${fontFamily}';
    src: url('${src}') format('${format}');
    font-weight: ${fontWeight};
    font-style: normal;
  }
  `;
