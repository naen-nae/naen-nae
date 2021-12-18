import ResetButton from 'components/buttons/ResetButton.vue';
import { useFontStore } from 'src/store/font';
import { storeToRefs } from 'pinia';

export default {
  title: 'components/buttons/ResetButton',
  component: ResetButton,
};

export const Default = () => ({
  components: { ResetButton },
  setup: () => {
    const fontStore = useFontStore();
    const { size } = storeToRefs(fontStore);
    const setRandomSize = () => {
      size.value = Math.ceil(Math.random() * 50 + 30);
    };

    return { size, setRandomSize };
  },
  template: `
    <ResetButton />
    <p>font size: {{ size }}</p>
    <button style="background-color: white; border: 2px solid;" @click="setRandomSize">set random size</button>
  `,
});
