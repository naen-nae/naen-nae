import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import constants from '../constants';
import pick from 'lodash/pick';
import addStylesheet from '../share/addStylesheet';

export default createStore({
  state: () => ({
    isLight:
      window.matchMedia !== undefined
        ? !window.matchMedia('(prefers-color-scheme: dark)').matches
        : true,
    fontSize: constants.DEFAILT_FONT_SIZE,
    textContent: '',
    searchContent: '',
    snackbarMsgs: [],
    fonts: [],
    scrollY: 0,
    screenWidth: 0,
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
    setSearchContent(state, searchContent) {
      state.searchContent = searchContent;
    },
    createSnackbar(state, msg) {
      state.snackbarMsgs.push({ msg, key: Math.random().toString() });
    },
    removeSnackbar(state, targetKey) {
      state.snackbarMsgs.splice(
        state.snackbarMsgs.findIndex(({ key }) => key === targetKey),
        1,
      );
    },
    addFonts(state, fonts) {
      state.fonts.push(...fonts);
    },
    enableFont(state, { name: targetName }) {
      state.fonts.find(({ name }) => name === targetName).enable = true;
    },
    enableSubsetFont(state, { name: targetName }) {
      state.fonts.find(({ name }) => name === targetName).subsetEnable = true;
    },
    setScrollY(state, scrollY) {
      state.scrollY = scrollY;
    },
    setScreenWidth(state, screenWidth) {
      state.screenWidth = screenWidth;
    },
  },
  actions: {
    resetFontSize(ctx) {
      ctx.commit('setFontSize', constants.DEFAILT_FONT_SIZE);
    },
    reqFontFace(ctx, fonts) {
      fonts
        .filter(font => font.enable === undefined || font.enable === false)
        .forEach(async ({ fontFamily, name }) => {
          await addStylesheet(fontFamily, `/css/${fontFamily}.css`);
          ctx.commit('enableFont', { name });
        });
    },
    reqSubsetFontFace(ctx, fonts) {
      fonts
        .filter(
          font =>
            font.subsetEnable === undefined || font.subsetEnable === false,
        )
        .forEach(async ({ fontFamily, name }) => {
          await addStylesheet(fontFamily, `/subset-css/${fontFamily}.css`);
          ctx.commit('enableSubsetFont', { name });
        });
    },
    updateScrollY(ctx, scrollY) {
      window.scrollTo(0, scrollY);
      ctx.commit('setScrollY', scrollY);
    },
  },
  plugins: [
    createPersistedState({
      reducer: state =>
        pick(state, ['isLight', 'fontSize', 'textContent', 'searchContent']),
    }),
  ],
});
