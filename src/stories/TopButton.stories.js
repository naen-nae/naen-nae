import TopButton from 'components/TopButton.vue';

export default {
  title: 'components/TopButton',
  component: TopButton,
};

const Template = args => ({
  components: { TopButton },
  setup: () => ({ args }),
  template: `<TopButton v-bind="args" />`,
});

export const Default = Template.bind({});

Default.decorators = [
  () => ({
    template: `<div class="h-[1800px]"><p>scroll down</p><story /></div>`,
  }),
];
