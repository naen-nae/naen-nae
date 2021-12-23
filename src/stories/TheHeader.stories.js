import TheHeader from 'components/section/TheHeader.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'components/section/TheHeader',
  component: TheHeader,
};

export const Default = () => ({
  components: { TheHeader },
  template: `<TheHeader />`,
});

Default.decorators = [vueRouter()];
