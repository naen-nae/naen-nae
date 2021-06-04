import InputField from '../components/InputField.vue';
import '../styles/index.scss';

export default {
  title: 'Components/InputField',
  component: InputField,
};

const Template = args => ({
  components: { InputField },
  setup: () => ({ args }),
  template: `<input-field v-bind="args" />`,
});

export const Default = Template.bind({});

export const Mask = Template.bind({});
Mask.args = {
  mask: '[0-9]',
};

export const MaxLength = Template.bind({});
MaxLength.args = {
  maxLength: 5,
};
