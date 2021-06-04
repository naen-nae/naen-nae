import { createRouter, createWebHashHistory } from 'vue-router';

import About from '../pages/About/About.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/about',
      component: About,
    },
  ],
});
