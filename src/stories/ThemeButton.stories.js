import ThemeButton from 'components/header/ThemeButton.vue';

export default {
  title: 'components/header/ThemeButton',
  component: ThemeButton,
};

const Template = args => ({
  components: { ThemeButton },
  setup: () => ({ args }),
  template: `<ThemeButton v-bind="args" />`,
});

export const Default = Template.bind({});
