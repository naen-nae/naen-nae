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

  // set env
  store.commit('setEnv', await (await req('/env.json')).json());

  // set initial fonts
  store.dispatch('addNextFonts');

  createApp(App).use(store).use(router).mount('#app');
})();
