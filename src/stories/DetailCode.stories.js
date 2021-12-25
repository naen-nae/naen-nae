import DetailCode from 'components/section/DetailCode.vue';
import fontsData from './__mock__/fonts.json';

export default {
  title: 'components/section/DetailCode',
  component: DetailCode,
};

export const Default = args => ({
  components: { DetailCode },
  setup: () => ({ args }),
  template: `<DetailCode v-bind="args" />`,
});

Default.args = {
  font: fontsData[0],
};
