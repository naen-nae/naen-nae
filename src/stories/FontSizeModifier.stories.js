import FontSizeModifier from '../components/FontSizeModifier.vue';
import '../styles/index.scss';

export default {
  title: 'Components/FontSizeModifier',
  component: FontSizeModifier,
};

const Template = args => ({
  components: { FontSizeModifier },
  setup: () => ({ args }),
  template: `<font-size-modifier />`,
});

export const Default = Template.bind({});
