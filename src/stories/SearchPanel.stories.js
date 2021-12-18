import SearchPanel from 'components/input/SearchPanel.vue';

export default {
  title: 'components/input/SearchPanel',
  component: SearchPanel,
};

const Template = args => ({
  components: { SearchPanel },
  setup: () => ({ args }),
  template: `<SearchPanel v-bind="args" />`,
});

export const Default = Template.bind({});
