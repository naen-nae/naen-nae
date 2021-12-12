import defaultTheme from 'windicss/defaultTheme';

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nanum Gothic"', ...defaultTheme.fontFamily.sans].join(','),
      },
    },
  },
  attributify: true,
};
