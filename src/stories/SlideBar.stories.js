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

export const Default = args => ({
  components: { SlideBar },
  setup: () => ({ args }),
  data: () => ({ value: '50' }),
  template: `<SlideBar v-model="value" v-bind="args" /><p>{{ value }}</p>`,
});

Default.args = {
  min: 1,
  max: 100,
};
