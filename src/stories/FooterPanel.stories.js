import FooterPanel from '../pages/share/FooterPanel.vue';
import '../styles/index.scss';

export default {
  title: 'Components/FooterPanel',
  component: FooterPanel,
};

const Template = args => ({
  components: { FooterPanel },
  setup: () => ({ args }),
  template: '<footer-panel />',
});

export const Default = Template.bind({});
