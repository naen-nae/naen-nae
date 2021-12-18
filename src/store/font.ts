import { defineStore } from 'pinia';

interface FontState {
  search: string;
}

export const useFontStore = defineStore({
  id: 'font',
  state: (): FontState => ({
    search: '',
  }),
});
