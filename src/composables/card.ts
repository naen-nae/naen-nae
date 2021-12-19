import { useFontStore } from 'src/store/font';

const CARD_MIN_HEIGHT = 141;
const SIZE_BREAKPOINT = 33;
const HEIGHT_BY_PX = 1.2;

const store = useFontStore();
const { size } = storeToRefs(store);

export const useCardHeight = () =>
  computed(() => {
    const parsedSize = parseInt(size.value, 10);
    return (
      CARD_MIN_HEIGHT +
      (parsedSize > SIZE_BREAKPOINT
        ? parsedSize - SIZE_BREAKPOINT * HEIGHT_BY_PX
        : 0)
    );
  });
