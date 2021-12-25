import SkeletonCard from 'components/cards/SkeletonCard.vue';

export default {
  title: 'components/cards/SkeletonCard',
  component: SkeletonCard,
};

export const Default = () => ({
  components: { SkeletonCard },
  template: `<SkeletonCard />`,
});
