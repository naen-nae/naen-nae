import ThemeButton from 'components/nav/ThemeButton.vue';

export default {
  title: 'components/nav/ThemeButton',
  component: ThemeButton,
};

const Template = args => ({
  components: { ThemeButton },
  setup: () => ({ args }),
  template: `<ThemeButton v-bind="args" />`,
});

export const Default = Template.bind({});
