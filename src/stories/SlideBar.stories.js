import SlideBar from 'components/input/SlideBar.vue';

export default {
  title: 'components/input/SlideBar',
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
      control: 'number',
      min: 11,
      max: 100,
    },
  },
};

const Template = args => ({
  components: { SlideBar },
  setup: () => ({ args }),
  data: () => ({ value: '50' }),
  template: `<SlideBar v-model="value" v-bind="args" /><p>{{ value }}</p>`,
});

export const Default = Template.bind({});
Default.args = {
  min: 1,
  max: 100,
};
