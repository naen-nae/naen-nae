import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import path from 'path';

export default {
  plugins: [vue(), Pages({ extensions: ['vue'] })],
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
