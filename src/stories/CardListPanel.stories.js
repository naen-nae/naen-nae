import CardListPanel from 'components/cards/CardListPanel.vue';
import vueRouter from 'storybook-vue3-router';
import { reactive } from 'vue';
import fontsData from './__mock__/fonts.json';

export default {
  title: 'components/cards/CardListPanel',
  component: CardListPanel,
};

export const Default = args => ({
  setup: () => {
    const fonts = reactive(args.fonts);
    return { fonts };
  },
  components: { CardListPanel },
  template: `<CardListPanel :fonts="fonts" />`,
});

Default.args = {
  fonts: fontsData,
};

Default.decorators = [vueRouter()];
