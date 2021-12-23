import AppTitle from 'components/section/AppTitle.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'components/section/AppTitle',
  component: AppTitle,
};

export const Default = () => ({
  components: { AppTitle },
  template: `<AppTitle />`,
});

Default.decorators = [vueRouter()];
