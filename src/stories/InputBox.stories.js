import InputField from '../components/InputField.vue';
import '../styles/index.scss';

export default {
  title: 'Components/InputField',
  component: InputField,
};

const Template = args => ({
  components: { InputField },
  setup: () => ({ args }),
  template: `<input-field />`,
});

export const Default = Template.bind({});
