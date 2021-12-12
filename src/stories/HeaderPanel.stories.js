import HeaderPanel from 'components/nav/HeaderPanel.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'components/nav/HeaderPanel',
  component: HeaderPanel,
};

const Template = args => ({
  components: { HeaderPanel },
  setup: () => ({ args }),
  template: `<HeaderPanel v-bind="args" />`,
});

export const Default = Template.bind({});

Default.decorators = [vueRouter()];