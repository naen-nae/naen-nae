import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.scss';
import store from './store';

// init theme
document
  .querySelector('html')
  .classList.add(store.state.isLight ? 'theme-light' : 'theme-dark');

createApp(App).use(store).mount('#app');
