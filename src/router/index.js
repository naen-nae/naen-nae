import { createRouter, createWebHashHistory } from 'vue-router';
import store from '../store';

import About from '../pages/About/About.vue';
import Home from '../pages/Home/Home.vue';
import Detail from '../pages/Detail/Detail.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      name: 'detail',
      path: '/detail/:fontName',
      props: true,
      component: Detail,
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

// validate font-name
router.beforeEach(({ name, params: { fontName } }) => {
  window.scrollTo(0, 0);

  if (name !== 'detail') {
    return true;
  }

  const targetFont = store.state.fonts.find(
    ({ fontFamily }) => fontFamily === fontName,
  );

  if (targetFont === undefined) {
    return router.push('/');
  }

  return true;
});

export default router;
