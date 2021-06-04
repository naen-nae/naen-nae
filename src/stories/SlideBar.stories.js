import SlideBar from '../components/SlideBar.vue';
import '../styles/index.scss';

export default {
  title: 'Components/SlideBar',
  component: SlideBar,
  argTypes: {
    min: {
      control: {
        type: 'number',
        min: 1,
        max: 10,
      },
    },
    max: {
      control: {
        type: 'number',
        min: 1,
        max: 10,
      },
    },
  },
};

const Template = args => ({
  components: { SlideBar },
  setup: () => ({ args }),
  template: `<slide-bar v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  min: 1,
  max: 100,
  value: '10',
};
