import DetailPage from 'src/pages/detail.vue';
import { useFontStore } from 'src/store/font';
import { useUrlSearchParams } from '@vueuse/core';

export default {
  title: 'pages/DetailPage',
  component: DetailPage,
};

export const Default = () => ({
  components: { DetailPage },
  setup: () => {
    const fontStore = useFontStore();
    fontStore.initialize();

    const params = useUrlSearchParams();
    params.fontFamily = 'esamanru';
  },
  template: '<DetailPage />',
});

export const NotFound = () => ({
  components: { DetailPage },
  setup: () => {
    const fontStore = useFontStore();
    fontStore.initialize();

    const params = useUrlSearchParams();
    params.fontFamily = 'no-exists-font-name';
  },
  template: '<DetailPage />',
});

export const Loading = () => ({
  components: { DetailPage },
  setup: () => {
    const fontStore = useFontStore();
    const { fonts } = storeToRefs(fontStore);
    fonts.value = [];

    const params = useUrlSearchParams();
    params.fontFamily = 'not-important-font-name';
  },
  template: '<DetailPage />',
});
