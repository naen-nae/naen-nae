import IndexPage from 'src/pages/index.vue';
import vueRouter from 'storybook-vue3-router';
import { useFontStore } from 'src/store/font';

export default {
  title: 'pages/IndexPage',
  component: IndexPage,
};

export const Default = () => ({
  components: { IndexPage },
  setup: () => {
    const store = useFontStore();
    store.initialize();
  },
  template: `<IndexPage />`,
});

Default.decorators = [vueRouter()];
