import SearchBox from '../components/SearchBox.vue';
import '../styles/index.scss';

export default {
  title: 'Components/SearchBox',
  component: SearchBox,
};

const Template = args => ({
  components: { SearchBox },
  setup: () => ({ args }),
  template: `<search-box />`,
});

export const Default = Template.bind({});
