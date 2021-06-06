import HeaderPanel from '../pages/share/HeaderPanel.vue';
import '../styles/index.scss';

export default {
  title: 'Components/HeaderPanel.vue',
  component: HeaderPanel,
};

const Template = args => ({
  components: { HeaderPanel },
  setup: () => ({ args }),
  template: '<header-panel />',
});

export const Default = Template.bind({});
