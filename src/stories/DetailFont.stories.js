import DetailFont from 'components/section/DetailFont.vue';
import fontsData from './__mock__/fonts.json';

export default {
  title: 'components/section/DetailFont',
  component: DetailFont,
};

export const Default = args => ({
  components: { DetailFont },
  setup: () => ({ args }),
  template: `<DetailFont v-bind="args" />`,
});

Default.args = {
  font: fontsData[0],
};
