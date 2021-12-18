const pagesPlugin = require('vite-plugin-pages');
const windiCSSPlugin = require('vite-plugin-windicss');
const AutoImport = require('unplugin-auto-import').default.vite;

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
  core: { builder: 'storybook-builder-vite' },
  viteFinal: async config => {
    config.resolve.alias = [
      {
        find: 'src',
        replacement: '/src/',
      },
      {
        find: 'components',
        replacement: '/src/components/',
      },
      {
        find: 'pages',
        replacement: '/src/pages/',
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js',
      },
    ];

    config.plugins.push(
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/head', '@vueuse/core'],
        dts: 'src/auto-imports.d.ts',
      }),
    );
    config.plugins.push(windiCSSPlugin.default());
    config.plugins.push(pagesPlugin.default({ extensions: ['vue'] }));

    return config;
  },
};
