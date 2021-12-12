/* eslint-disable */

import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import './styles/index.scss';
import routes from 'virtual:generated-pages';

export const createApp = ViteSSG(App, { routes });
