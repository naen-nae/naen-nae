/* eslint-disable */

import devalue from '@nuxt/devalue';
import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import './styles/index.scss';
import 'virtual:windi.css';
import routes from 'virtual:generated-pages';
import { useFontStore } from './store/font';

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, initialState }) => {
    const pinia = createPinia();
    app.use(pinia);

    if (import.meta.env.SSR) {
      initialState.pinia = pinia.state.value;
    } else {
      pinia.state.value = initialState?.pinia ?? {};
    }

    router.beforeEach((to, from, next) => {
      const store = useFontStore();
      store.initialize();
      next();
    });
  },
  {
    transformState: state => (import.meta.env.SSR ? devalue(state) : state),
  },
);
