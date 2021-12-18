import FontSizeModifier from 'components/input/FontSizeModifier.vue';
import { storeToRefs } from 'pinia';
import { useFontStore } from 'src/store/font';

export default {
  title: 'components/input/FontSizeModifier',
  component: FontSizeModifier,
};

const Template = args => ({
  components: { FontSizeModifier },
  setup: () => {
    const fontStore = useFontStore();
    const { size } = storeToRefs(fontStore);
    return { args, size };
  },
  template: `<FontSizeModifier v-bind="args" /><p>font size : {{ size }} (min size = 8px, max size = 80px)</p>`,
});

export const Default = Template.bind({});
