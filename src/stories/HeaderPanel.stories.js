import HeaderPanel from 'components/header/HeaderPanel.vue';

export default {
  title: 'components/header/HeaderPanel',
  component: HeaderPanel,
};

const Template = args => ({
  components: { HeaderPanel },
  setup: () => ({ args }),
  template: `<HeaderPanel v-bind="args" />`,
});

export const Default = Template.bind({});
