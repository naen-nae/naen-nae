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
    'typo-link-color': 'text-blue-600 dark:text-blue-300',
    'typo-color': 'dark:text-gray-50',
    'typo-headline': 'typo-color text-[32px] tracking-wider',
    'typo-title': 'typo-color text-[24px] tracking-wider',
    'typo-subtitle': 'typo-color text-[14px] tracking-wide',
    'typo-text': 'typo-color text-[12px] tracking-wide',
    'typo-link':
      'typo-link-color text-[12px] tracking-wide font-bold cursor-pointer hover:underline',
    'flex-center': 'flex justify-center items-center',
    'bg-gray-color': 'bg-true-gray-200 dark:bg-true-gray-500',
    'border-gray-color': 'border-true-gray-200 dark:border-true-gray-500',
    'border-link-color': 'border-blue-600 dark:border-blue-300',
    'cursor-floated':
      'transform-gpu transition translate-y-0 duration-300 hover:shadow-lg hover:-translate-y-0.5',
    'cursor-opacity':
      'transition opacity-70 shadow dark:shadow-warm-gray-700 hover:shadow-md hover:opacity-100',
  },
});
