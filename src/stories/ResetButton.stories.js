import ResetButton from '../components/ResetButton.vue';
import '../styles/index.scss';

export default {
  title: 'Components/ResetButton',
  component: ResetButton,
};

const Template = args => ({
  components: { ResetButton },
  setup: () => ({ args }),
  template: `<reset-button v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
