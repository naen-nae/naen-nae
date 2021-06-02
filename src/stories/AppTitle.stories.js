import AppTitle from '../components/AppTitle.vue';
import '../styles/index.scss';

export default {
  title: 'Components/AppTitle',
  component: AppTitle,
};

const Template = args => ({
  components: { AppTitle },
  setup: () => args,
  template: `<app-title />`,
});

export const Default = Template.bind({});
