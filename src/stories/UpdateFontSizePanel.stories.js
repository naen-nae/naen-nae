import UpdateFontSizePanel from 'components/input/UpdateFontSizePanel.vue';
import { storeToRefs } from 'pinia';
import { useFontStore } from 'src/store/font';

export default {
  title: 'components/input/UpdateFontSizePanel',
  component: UpdateFontSizePanel,
};

export const Default = () => ({
  components: { UpdateFontSizePanel },
  setup: () => {
    const fontStore = useFontStore();
    const { size } = storeToRefs(fontStore);
    return { size };
  },
  template: `<UpdateFontSizePanel /><p>font size : {{ size }} (min size = 8px, max size = 80px)</p>`,
});
