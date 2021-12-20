import CardSkeleton from 'components/cards/CardSkeleton.vue';

export default {
  title: 'components/cards/CardSkeleton',
  component: CardSkeleton,
};

export const Default = () => ({
  components: { CardSkeleton },
  template: `<CardSkeleton />`,
});
