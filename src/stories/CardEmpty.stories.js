import CardEmpty from 'components/cards/CardEmpty.vue';

export default {
  title: 'components/cards/CardEmpty',
  component: CardEmpty,
};

export const Default = () => ({
  components: { CardEmpty },
  template: '<CardEmpty />',
});
