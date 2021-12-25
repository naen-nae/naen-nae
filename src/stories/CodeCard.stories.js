import CodeCard from 'components/cards/CodeCard.vue';

export default {
  title: 'components/cards/CodeCard',
  component: CodeCard,
};

export const Default = args => ({
  setup: () => ({ args }),
  components: { CodeCard },
  template: `<CodeCard v-bind="args" />`,
});

Default.args = {
  title: 'code title',
  code: '<link href="https://cdn.jsdelivr.net/gh/naen-nae/fonts/build/css/NEXON Lv1 Gothic.css" rel="stylesheet">',
};
