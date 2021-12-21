import { defineConfig } from '@windicss/plugin-utils';
import defaultTheme from 'windicss/defaultTheme';
import plugin from 'windicss/plugin';

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nanum Gothic"', ...defaultTheme.fontFamily.sans].join(','),
      },
      textShadow: {
        darkXl:
          '1px 1px 3px rgb(255 255 255 / 29%), 2px 4px 7px rgb(182 191 130 / 35%)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) =>
      addUtilities({
        '.break-keep': {
          'word-break': 'keep-all',
        },
        '.will-change-transform': {
          willChange: 'transform',
        },
      }),
    ),
  ],
  shortcuts: {
    'typo-headline': 'dark:text-gray-50 text-[32px] tracking-wider',
    'typo-title': 'dark:text-gray-50 text-[24px] tracking-wider',
    'typo-subtitle': 'dark:text-gray-50 text-[14px] tracking-wide',
    'typo-text': 'dark:text-gray-50 text-[12px] tracking-wide',
    'typo-link':
      'text-blue-600 dark:text-blue-300 text-[12px] tracking-wide font-bold cursor-pointer hover:underline',
    'flex-center': 'flex justify-center items-center',
    'bg-gray-color': 'bg-true-gray-200 dark:bg-true-gray-500',
    'border-gray-color': 'border-true-gray-200 dark:border-true-gray-500',
  },
});