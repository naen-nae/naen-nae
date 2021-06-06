import { createRouter, createWebHashHistory } from 'vue-router';

import About from '../pages/About/About.vue';
import Home from '../pages/Home/Home.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/',
      component: Home,
    },
    {
      path: '/:pathMatch(.*)*',
      component: Home,
    },
  ],
});
