import ThemeButton from 'components/buttons/ThemeButton.vue';

export default {
  title: 'components/buttons/ThemeButton',
  component: ThemeButton,
};

export const Default = () => ({
  components: { ThemeButton },
  template: `<ThemeButton />`,
});
