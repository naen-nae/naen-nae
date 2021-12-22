import DetailPage from 'src/pages/detail.vue';

export default {
  title: 'pages/DetailPage',
  component: DetailPage,
};

export const Default = () => ({
  components: { DetailPage },
  template: '<DetailPage />',
});
