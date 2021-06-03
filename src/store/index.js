import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: () => ({
    isLight: true,
  }),
  mutations: {
    toggleTheme(state) {
      state.isLight = !state.isLight;
    },
  },
  plugins: [createPersistedState()],
});
