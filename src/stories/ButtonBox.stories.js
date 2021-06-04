import ButtonBox from '../components/ButtonBox.vue';
import '../styles/index.scss';

export default {
  title: 'Components/ButtonBox',
  component: ButtonBox,
};

const Template = args => ({
  components: { ButtonBox },
  setup: () => ({ args }),
  template: `<button-box v-bind="args">Button</button-box>`,
});

export const Default = Template.bind({});
Default.args = {
  width: '100px',
};
