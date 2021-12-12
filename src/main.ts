/* eslint-disable */

import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import './styles/index.scss';
import 'virtual:windi.css';
import routes from 'virtual:generated-pages';

export const createApp = ViteSSG(App, { routes });
