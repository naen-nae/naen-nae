import SlideBar from 'components/input/SlideBar.vue';

export default {
  title: 'components/input/SlideBar',
  component: SlideBar,
};

const Template = args => ({
  components: { SlideBar },
  setup: () => ({ args }),
  data: () => ({ value: '50' }),
  template: `<SlideBar v-model="value" v-bind="args" /><p>{{ value }}</p>`,
});

export const Default = Template.bind({});
