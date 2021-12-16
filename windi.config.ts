import { defineConfig } from '@windicss/plugin-utils';
import defaultTheme from 'windicss/defaultTheme';
import plugin from 'windicss/plugin';

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nanum Gothic"', ...defaultTheme.fontFamily.sans].join(','),
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) =>
      addUtilities({
        '.break-keep': {
          'word-break': 'keep-all',
        },
      }),
    ),
  ],
  shortcuts: {
    'typo-headline': 'dark:text-gray-50 text-3xl tracking-wider',
    'typo-title': 'dark:text-gray-50 text-2xl tracking-wider',
    'typo-subtitle': 'dark:text-gray-50 text-lg tracking-wide',
    'typo-text': 'dark:text-gray-50 text-sm tracking-wide',
    'typo-link':
      'text-blue-600 dark:text-blue-300 text-sm tracking-wide font-bold cursor-pointer hover:underline',
    'flex-center': 'flex justify-center items-center',
  },
  attributify: true,
});
