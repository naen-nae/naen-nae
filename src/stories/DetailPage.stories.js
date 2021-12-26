import DetailPage from 'src/pages/[...fontFamily].vue';
import { useFontStore } from 'src/store/font';

export default {
  title: 'pages/DetailPage',
  component: DetailPage,
};

export const Default = ({ fontFamily }) => ({
  components: { DetailPage },
  setup: () => {
    const fontStore = useFontStore();
    fontStore.initialize();

    return { fontFamily };
  },
  template: '<DetailPage :fontFamily="fontFamily" />',
});

Default.args = {
  fontFamily: ['esamanru'],
};

export const NotFound = ({ fontFamily }) => ({
  components: { DetailPage },
  setup: () => {
    const fontStore = useFontStore();
    fontStore.initialize();

    return { fontFamily };
  },
  template: '<DetailPage :fontFamily="fontFamily" />',
});

NotFound.args = {
  fontFamily: ['no-exists-font-name'],
};

export const Loading = ({ fontFamily }) => ({
  components: { DetailPage },
  setup: () => {
    const fontStore = useFontStore();
    const { fonts } = storeToRefs(fontStore);
    fonts.value = [];

    return { fontFamily };
  },
  template: '<DetailPage :fontFamily="fontFamily" />',
});

Loading.args = {
  fontFamily: ['not-important-font-name'],
};
