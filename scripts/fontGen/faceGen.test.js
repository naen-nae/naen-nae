const faceGen = require('./faceGen');

test('test faceGen', () => {
  [
    [
      {
        src: 'NanumGothic/NanumGothic-Regular.ttf',
        fontWeight: 'normal',
        fontFamily: 'Nanum Gothic',
        format: 'truetype',
      },
      `
      @font-face {
        font-family: 'Nanum Gothic';
        src: url('NanumGothic/NanumGothic-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
      `
        .trim()
        .split('\n')
        .map(line => line.trim())
        .join(''),
    ],
    [
      {
        src: 'NanumGothic/NanumGothic-Bold.ttf',
        fontWeight: 'bold',
        fontFamily: 'Nanum Gothic',
        format: 'truetype',
      },
      `
      @font-face {
        font-family: 'Nanum Gothic';
        src: url('NanumGothic/NanumGothic-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
      }
      `
        .trim()
        .split('\n')
        .map(line => line.trim())
        .join(''),
    ],
    [
      {
        src: 'NanumGothic/NanumGothic-ExtraBold.ttf',
        fontWeight: 'bolder',
        fontFamily: 'Nanum Gothic',
        format: 'truetype',
      },
      `
      @font-face {
        font-family: 'Nanum Gothic';
        src: url('NanumGothic/NanumGothic-ExtraBold.ttf') format('truetype');
        font-weight: bolder;
        font-style: normal;
      }
      `
        .trim()
        .split('\n')
        .map(line => line.trim())
        .join(''),
    ],
  ].forEach(([options, expectValue]) =>
    expect(
      faceGen(options)
        .trim()
        .split('\n')
        .map(line => line.trim())
        .join(''),
    ).toBe(expectValue),
  );
});
