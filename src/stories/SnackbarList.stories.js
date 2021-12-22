import SnackbarList from 'components/snackbar/SnackbarList.vue';
import { useSnackbarStore } from 'src/store/snackbar';

export default {
  title: 'components/snackbar/SnackbarList',
  component: SnackbarList,
};

export const Default = () => ({
  components: { SnackbarList },
  setup: () => {
    const store = useSnackbarStore();

    return {
      addMessage: () => store.notify((0xffffff * Math.random()).toString(16)),
    };
  },
  template: `
    <SnackbarList />
    <button @click="addMessage">add message</button>
  `,
});
