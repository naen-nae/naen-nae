import { computed, watch } from '@vue/runtime-dom';
import { throttle } from 'lodash';
import { onMounted, toRefs } from 'vue';
import { useStore } from 'vuex';
import constants from '../constants';

// set vars
const rowGap = 12; // card-box grid row gap
const vScrollTop = 177.6666717529297; // !hardcoded
const indPad = 18;
const reqFontFaceThrottle = 300; // ms
const { availHeight: screenHeight } = window.screen;

export default function useVirtualScroll({ fonts, vScrollContents }) {
  // inject values
  const store = useStore();
  const { scrollY, screenWidth, fontSize } = toRefs(store.state);

  // calc chunk size
  const chunkSize = computed(() =>
    screenWidth.value > constants.MOBILE_WDTIH_BRACK_POINT ? 3 : 1,
  );

  // calc card height
  const cardHeight = computed(
    () => 141 + (fontSize.value > 33 ? fontSize.value - 33 * 1.2 : 0),
  );

  // define display index
  const displayStartInd = computed(() =>
    Math.max(
      Math.floor((scrollY.value - vScrollTop) / (cardHeight.value + rowGap)) *
        chunkSize.value,
      0,
    ),
  );

  const displayEndInd = computed(
    () =>
      Math.floor(screenHeight / (cardHeight.value + rowGap)) * chunkSize.value +
      displayStartInd.value,
    fonts.value.length,
  );

  // define translateY
  const translateY = computed(() =>
    Math.max(
      (cardHeight.value + rowGap) *
        ((displayStartInd.value - indPad) / chunkSize.value) -
        rowGap,
      0,
    ),
  );

  // update scroll contents position
  watch(translateY, translateY => {
    // validate fonts lnegth
    if (fonts.value.length === 0) {
      return;
    }

    // validate element available
    if (vScrollContents.value === undefined) {
      return;
    }

    // update scroll contents position
    vScrollContents.value.style.setProperty(
      'transform',
      `translateY(${translateY}px)`,
    );
  });

  // req font-face
  const reqFontFace = throttle(startInd => {
    const endInd = displayEndInd.value;
    store.dispatch(
      'reqFontFace',
      fonts.value.slice(
        Math.max(startInd - indPad, 0),
        Math.min(endInd + 1 + indPad, fonts.value.length),
      ),
    );
  }, reqFontFaceThrottle);

  watch(displayStartInd, reqFontFace);
  onMounted(reqFontFace.bind(reqFontFace, displayStartInd.value)); // init

  return {
    updateScrollY: () => store.commit('setScrollY', window.scrollY),
    updateScreenWidth: () => store.commit('setScreenWidth', window.innerWidth),
    displayFonts: computed(() =>
      fonts.value.slice(
        Math.max(displayStartInd.value - indPad, 0),
        Math.min(displayEndInd.value + 1 + indPad, fonts.value.length),
      ),
    ),
    vScrollHeight: computed(
      () =>
        (cardHeight.value + rowGap) *
          Math.ceil(fonts.value.length / chunkSize.value) -
        rowGap,
    ),
  };
}
