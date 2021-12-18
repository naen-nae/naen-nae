/* eslint-disable */

import devalue from '@nuxt/devalue';
import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import './styles/index.scss';
import 'virtual:windi.css';
import routes from 'virtual:generated-pages';

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, initialState }) => {
    const pinia = createPinia();
    app.use(pinia);

    if (import.meta.env.SSR) {
      initialState.pinia = pinia.state.value;
    } else {
      pinia.state.value = initialState?.pinia ?? {};
    }
  },
  {
    transformState: state => (import.meta.env.SSR ? devalue(state) : state),
  },
);
