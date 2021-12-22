import TheFooter from 'components/nav/TheFooter.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'components/nav/TheFooter',
  component: TheFooter,
};

export const Default = () => ({
  components: { TheFooter },
  template: `<TheFooter />`,
});

Default.decorators = [vueRouter()];
