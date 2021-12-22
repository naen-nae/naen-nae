import TheCard from 'components/cards/TheCard.vue';
import { useFontStore } from 'src/store/font';

export default {
  title: 'components/cards/TheCard',
  component: TheCard,
};

export const Default = args => ({
  components: { TheCard },
  setup: () => {
    const font = reactive(args.font);
    setTimeout(() => {
      font.availableSubset = true;
    }, 2000);

    const fontStore = useFontStore();
    const { size } = storeToRefs(fontStore);
    const setRandomSize = () => {
      size.value = Math.ceil(Math.random() * 50 + 30);
    };

    return { font, size, setRandomSize };
  },
  template: `
    <TheCard :font="font" />
    <hr />
    <p>font size: {{ size }}</p>
    <button style="background-color: white; border: 2px solid; padding: 0.3em;" @click="setRandomSize">set random font size</button>
  `,
});

Default.args = {
  font: {
    name: 'font name',
    author: 'author',
    family: 'sans-serif',
    files: ['a.ttf', 'b.ttf', 'c.ttf'],
    weights: [400, 600, 800],
    licenseSummary: {
      print: true,
      website: true,
      video: true,
      paper: true,
      embeding: true,
      bici: true,
      ofl: false,
    },
    license: 'LICENSE',
    availableSubset: false,
  },
};
