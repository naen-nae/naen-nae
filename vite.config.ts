import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';

export default {
  plugins: [vue(), WindiCSS(), Pages({ extensions: ['vue'] })],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      pages: path.resolve(__dirname, 'src', 'pages'),
      components: path.resolve(__dirname, 'src', 'components'),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
};
