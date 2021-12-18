import TopButton from 'components/buttons/TopButton.vue';

export default {
  title: 'components/buttons/TopButton',
  component: TopButton,
};

export const Default = () => ({
  components: { TopButton },
  template: `<TopButton />`,
});

Default.decorators = [
  () => ({
    template: `<div class="h-[1800px]"><p>scroll down</p><story /></div>`,
  }),
];
