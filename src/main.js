import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.scss';
import store from './store';
import router from './router';
import req from './share/req';
import './share/registerSw';

(async () => {
  // init theme
  document
    .querySelector('html')
    .classList.add(store.state.isLight ? 'theme-light' : 'theme-dark');

  // get fonts
  store.commit('addFonts', await req('/fonts.json', { parseType: 'json' }));

  createApp(App).use(store).use(router).mount('#app');
})();
