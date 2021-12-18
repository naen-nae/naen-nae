import AppTitle from 'components/nav/AppTitle.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'components/nav/AppTitle',
  component: AppTitle,
};

export const Default = () => ({
  components: { AppTitle },
  template: `<AppTitle />`,
});

Default.decorators = [vueRouter()];
