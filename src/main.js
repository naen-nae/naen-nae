import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.scss';
import store from './store';
import router from './router';

// init theme
document
  .querySelector('html')
  .classList.add(store.state.isLight ? 'theme-light' : 'theme-dark');

createApp(App).use(store).use(router).mount('#app');
