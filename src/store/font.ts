import { DEFAULT_FONT_SIZE } from 'src/constants';
import { Font } from 'src/types/Font';

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
});
