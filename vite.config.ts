import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import WindiCSS from 'vite-plugin-windicss';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';

export default {
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/head', '@vueuse/core', 'pinia'],
      dts: 'src/auto-imports.d.ts',
    }),
    WindiCSS(),
    Pages({ extensions: ['vue'] }),
  ],
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
