import UpdateFontSizeField from 'components/input/UpdateFontSizeField.vue';
import { storeToRefs } from 'pinia';
import { useFontStore } from 'src/store/font';

export default {
  title: 'components/input/UpdateFontSizeField',
  component: UpdateFontSizeField,
};

export const Default = () => ({
  components: { UpdateFontSizeField },
  setup: () => {
    const fontStore = useFontStore();
    const { size } = storeToRefs(fontStore);
    return { size };
  },
  template: `<UpdateFontSizeField /><p>font size : {{ size }} (min size = 8px, max size = 80px)</p>`,
});
