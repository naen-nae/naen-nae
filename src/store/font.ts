import { DEFAULT_FONT_SIZE } from 'src/constants';
import { Font } from 'src/types/Font';
import axios from 'axios';
import { useSnackbarStore } from './snackbar';

const FONTS_URL =
  'https://raw.githack.com/naen-nae/fonts/main/build/fonts.json';

interface FontState {
  search: string;
  size: string;
  fonts: Font[];
}

export const useFontStore = defineStore({
  id: 'font',
  state: (): FontState => ({
    search: '',
    size: DEFAULT_FONT_SIZE,
    fonts: [],
  }),
  getters: {
    isInitialized: ({ fonts }) => fonts.length !== 0,
  },
  actions: {
    async initialize() {
      if (this.isInitialized) {
        return;
      }

      const snackbarStore = useSnackbarStore();

      try {
        const { data } = await axios.get<Font[]>(FONTS_URL);
        this.fonts = data;
      } catch {
        snackbarStore.notify(
          '폰트 데이터를 불러오지 못했습니다. 인터넷 연결을 확인해주세요.',
        );
      }
    },
  },
});
