import { DEFAULT_FONT_SIZE } from 'src/constants';

interface FontState {
  search: string;
  size: string;
}

export const useFontStore = defineStore({
  id: 'font',
  state: (): FontState => ({
    search: '',
    size: DEFAULT_FONT_SIZE,
  }),
});
