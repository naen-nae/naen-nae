interface SnackbarState {
  contents: {
    msg: string;
    id: string;
  }[];
}

const genId = (() => {
  let ind = 0;
  return () => {
    ind += 1;
    return `${new Date().getTime()}-${ind}`;
  };
})();

export const useSnackbarStore = defineStore({
  id: 'snackbar',
  state: (): SnackbarState => ({
    contents: [],
  }),
  actions: {
    notify(msg: string) {
      if (msg === '') {
        return;
      }

      const id = genId();
      this.contents.push({
        msg,
        id,
      });
    },
    close(targetId: string) {
      const contentsInd = this.contents.findIndex(({ id }) => id === targetId);

      if (contentsInd === -1) {
        return;
      }

      this.contents.splice(contentsInd, 1);
    },
  },
});
