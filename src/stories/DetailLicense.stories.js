import DetailLicense from 'components/section/DetailLicense.vue';
import fontsData from './__mock__/fonts.json';

export default {
  title: 'components/section/DetailLicense',
  component: DetailLicense,
};

export const Default = args => ({
  components: { DetailLicense },
  setup: () => ({ args }),
  template: `<DetailLicense v-bind="args" />`,
});

Default.args = {
  font: fontsData[0],
};
