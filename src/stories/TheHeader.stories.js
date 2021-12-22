import TheHeader from 'components/nav/TheHeader.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'components/nav/TheHeader',
  component: TheHeader,
};

export const Default = () => ({
  components: { TheHeader },
  template: `<TheHeader />`,
});

Default.decorators = [vueRouter()];
