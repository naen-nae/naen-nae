import TheFooter from 'components/section/TheFooter.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'components/section/TheFooter',
  component: TheFooter,
};

export const Default = () => ({
  components: { TheFooter },
  template: `<TheFooter />`,
});

Default.decorators = [vueRouter()];
