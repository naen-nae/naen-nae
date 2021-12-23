import DetailTitle from 'components/nav/DetailTitle.vue';
import SnackbarList from 'components/snackbar/SnackbarList.vue';
import vueRouter from 'storybook-vue3-router';
import fontsData from './__mock__/fonts.json';

export default {
  title: 'components/nav/DetailTitle',
  component: DetailTitle,
};

export const Default = args => ({
  components: { DetailTitle, SnackbarList },
  setup: () => ({ args }),
  template: `
    <DetailTitle v-bind="args" />
    <SnackbarList />
  `,
});

Default.args = {
  font: fontsData[0],
};

Default.decorators = [vueRouter()];
