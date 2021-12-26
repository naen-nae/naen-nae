import AboutPage from 'src/pages/about.vue';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
};

export const Default = () => ({
  components: { AboutPage },
  template: `<AboutPage />`,
});
