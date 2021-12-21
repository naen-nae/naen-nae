import SnackbarListItem from 'components/snackbar/SnackbarListItem.vue';

export default {
  title: 'components/snackbar/SnackbarListItem',
  component: SnackbarListItem,
};

export const Default = () => ({
  components: { SnackbarListItem },
  template: '<SnackbarListItem>Message</SnackbarListItem>',
});
