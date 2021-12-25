import FontCardList from 'components/cards/FontCardList.vue';
import vueRouter from 'storybook-vue3-router';
import { reactive } from 'vue';
import fontsData from './__mock__/fonts.json';

export default {
  title: 'components/cards/FontCardList',
  component: FontCardList,
};

export const Default = args => ({
  setup: () => {
    const fonts = reactive(args.fonts);
    return { fonts };
  },
  components: { FontCardList },
  template: `<FontCardList :fonts="fonts" />`,
});

Default.args = {
  fonts: fontsData,
};

Default.decorators = [vueRouter()];
