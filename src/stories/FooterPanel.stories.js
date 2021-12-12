import FooterPanel from 'components/nav/FooterPanel.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'components/nav/FooterPanel',
  component: FooterPanel,
};

const Template = args => ({
  components: { FooterPanel },
  setup: () => ({ args }),
  template: `<FooterPanel v-bind="args" />`,
});

export const Default = Template.bind({});

Default.decorators = [vueRouter()];
