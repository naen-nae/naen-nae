import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import constants from '../constants';

export default createStore({
  state: () => ({
    isLight: true,
    fontSize: '12',
    textContent: '',
  }),
  mutations: {
    toggleTheme(state) {
      state.isLight = !state.isLight;
    },
    setFontSize(state, fontSize) {
      if (
        !(
          constants.MIN_FONT_SIZE <= fontSize &&
          fontSize <= constants.MAX_FONT_SIZE
        )
      ) {
        return;
      }

      state.fontSize = fontSize;
    },
    setTextContent(state, textContent) {
      state.textContent = textContent;
    },
  },
  plugins: [createPersistedState()],
});
