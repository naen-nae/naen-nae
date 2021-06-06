const getFontFormat = require('./getFontFormat');

test('test getFontFormat', () => {
  [
    ['test.ttf', 'truetype'],
    ['/test/test.test.test.ttf', 'truetype'],
    ['woff.woff', 'woff'],
    ['woff.woff2.woff.woff2', 'woff2'],
    ['..svg', 'svg'],
  ].forEach(([src, format]) => expect(getFontFormat(src)).toBe(format));
});
