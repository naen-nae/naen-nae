import CardList from 'components/cards/CardList.vue';
import vueRouter from 'storybook-vue3-router';
import { reactive } from 'vue';
import fontsData from './__mock__/fonts.json';

export default {
  title: 'components/cards/CardList',
  component: CardList,
};

export const Default = args => ({
  setup: () => {
    const fonts = reactive(args.fonts);
    return { fonts };
  },
  components: { CardList },
  template: `<CardList :fonts="fonts" />`,
});

Default.args = {
  fonts: fontsData,
};

Default.decorators = [vueRouter()];
