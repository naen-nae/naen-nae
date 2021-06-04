import ThemeButton from '../components/ThemeButton.vue';
import '../styles/index.scss';

export default {
  title: 'Components/ThemeButton',
  component: ThemeButton,
};

const Template = args => ({
  components: { ThemeButton },
  setup: () => ({ args }),
  template: '<theme-button v-bind="args" />',
});

export const Default = Template.bind({});
