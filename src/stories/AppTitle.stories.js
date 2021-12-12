import AppTitle from 'components/AppTitle.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'components/AppTitle',
  component: AppTitle,
};

const Template = args => ({
  components: { AppTitle },
  setup: () => ({ args }),
  template: `<AppTitle v-bind="args" />`,
});

export const Default = Template.bind({});

Default.decorators = [vueRouter()];
