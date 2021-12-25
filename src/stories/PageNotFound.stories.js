import PageNotFound from 'components/cards/PageNotFound.vue';

export default {
  title: 'components/cards/PageNotFound',
  component: PageNotFound,
};

export const Default = () => ({
  components: { PageNotFound },
  template: '<PageNotFound />',
});
