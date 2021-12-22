import SearchField from 'components/input/SearchField.vue';

export default {
  title: 'components/input/SearchField',
  component: SearchField,
};

export const Default = () => ({
  components: { SearchField },
  template: `<SearchField />`,
});
