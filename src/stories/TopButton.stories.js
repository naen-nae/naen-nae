import TopButton from '../components/TopButton.vue';
import '../styles/index.scss';

export default {
  title: 'Components/TopButton',
  component: TopButton,
};

const Template = args => ({
  components: { TopButton },
  setup: () => ({ args }),
  template: '<top-button />',
});

export const Default = Template.bind({});
