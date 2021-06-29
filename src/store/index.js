import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import constants from '../constants';
import pick from 'lodash/pick';
import addStylesheet from '../share/addStylesheet';
import req from '../share/req';

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
    env: {},
    fontInd: -1,
    inftyScroll: false,
    loadFonts: false,
    scrollY: 0,
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
    addFont(state, font) {
      state.fonts.push(font);
    },
    enableFont(state, ind) {
      state.fonts[ind].enable = true;
    },
    setEnv(state, env) {
      state.env = env;
    },
    enableInftyScroll(state) {
      state.inftyScroll = true;
    },
    startLoadFonts(state) {
      state.loadFonts = true;
    },
    endLoadFonts(state) {
      state.loadFonts = false;
    },
    increaseFontInd(state) {
      state.fontInd++;
    },
    decreaseFontInd(state) {
      state.fontInd--;
    },
    setScrollY(state, scrollY) {
      state.scrollY = scrollY;
    },
  },
  actions: {
    resetFontSize(ctx) {
      ctx.commit('setFontSize', constants.DEFAILT_FONT_SIZE);
    },
    async addNextFonts(ctx) {
      if (ctx.state.fontInd + 1 >= ctx.state.env.faces) {
        return;
      }

      ctx.commit('startLoadFonts');

      // set ind
      ctx.commit('increaseFontInd');
      const ind = ctx.state.fontInd;

      let fonts = null;

      // req guard
      try {
        fonts = await (await req(`/fonts/fonts-${ind}.json`)).json();
      } catch {
        ctx.commit('endLoadFonts');
        ctx.commit('decreaseFontInd');
        return;
      }

      // store start ind
      const startInd = ctx.state.fonts.length;

      // display fonts
      fonts.forEach(font => ctx.commit('addFont', { ...font, enable: false }));

      try {
        await Promise.all(
          fonts.map(async (font, ind) => {
            const { fontFamily } = font;
            await addStylesheet(fontFamily, `/css/${fontFamily}.css`);

            return ctx.commit('enableFont', startInd + ind);
          }),
        );
      } finally {
        ctx.commit('endLoadFonts');
      }
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
