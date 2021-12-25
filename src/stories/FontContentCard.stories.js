import FontContentCard from 'components/cards/FontContentCard.vue';
import { useFontStore } from 'src/store/font';

export default {
  title: 'components/cards/FontContentCard',
  component: FontContentCard,
};

export const Default = ({ fontWeight, fontFamily }) => ({
  components: { FontContentCard },
  setup: () => {
    const store = useFontStore();
    const { inputText } = storeToRefs(store);

    inputText.value =
      'input text content input text content input text content';

    return { fontWeight, fontFamily };
  },
  template: `<FontContentCard :font-weight="fontWeight" :font-family="fontFamily" />`,
});

Default.args = {
  fontWeight: 300,
  fontFamily: 'Nanum Gothic',
};
