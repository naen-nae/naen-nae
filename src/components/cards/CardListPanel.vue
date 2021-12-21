<template>
  <div
    class="overflow-hidden will-change-transform"
    :style="{ height: `${containerHeight}px` }"
  >
    <div
      class="grid gap-y-[12px] gap-x-[16px] grid-cols-[minmax(100%,auto)] will-change-transform md:grid-cols-[repeat(auto-fill,minmax(32%,auto))]"
      :style="{ transform: `translateY(${translateY}px)` }"
      ref="vScrollContainer"
      @click="handleRoute"
    >
      <CardPanel
        v-for="(font, ind) in displayFonts"
        :key="`${font.fontFamily}-${ind}`"
        :font="font"
        :data-font-family="font.fontFamily"
      />

      <template v-if="!isInitialized">
        <CardSkeleton v-for="ind of SKELETON_NUM" :key="ind" />
      </template>
    </div>

    <CardEmptyPanel v-if="isInitialized && !fonts.length" />
  </div>
</template>

<script lang="ts" setup>
import { useCardHeight } from 'src/composables/card';
import { reqFontFace } from 'src/composables/font';
import { useFontStore } from 'src/store/font';
import { Font } from 'src/types/Font';
import CardPanel from './CardPanel.vue';
import CardSkeleton from './CardSkeleton.vue';
import CardEmptyPanel from './CardEmptyPanel.vue';

const SKELETON_NUM = 24;

const store = useFontStore();
const { isInitialized } = storeToRefs(store);

/* virtual scroll */

const MD_BREAK_POINT = 768;
const ROW_GAP = 12;
const VSCROLL_PADDING = 18;
const REQ_THROTTLE_TIMEOUT = 300;

const props = defineProps<{
  fonts: Font[];
}>();
const { fonts } = toRefs(props);

const { width, height } = useWindowSize();
const { y } = useWindowScroll();
const cardHeight = useCardHeight();

const rowNum = computed(() => (width.value > MD_BREAK_POINT ? 3 : 1));

const startInd = computed(() =>
  Math.max(
    Math.floor(y.value / (cardHeight.value + ROW_GAP)) * rowNum.value,
    0,
  ),
);

const endInd = computed(() =>
  Math.min(
    Math.floor(height.value / (cardHeight.value + ROW_GAP)) * rowNum.value +
      startInd.value,
    fonts.value.length,
  ),
);

const translateY = computed(() =>
  Math.max(
    (cardHeight.value + ROW_GAP) *
      ((startInd.value - VSCROLL_PADDING) / rowNum.value) -
      ROW_GAP,
    0,
  ),
);

const displayFonts = computed(() =>
  fonts.value.slice(
    Math.max(startInd.value - VSCROLL_PADDING, 0),
    Math.min(endInd.value + 1 + VSCROLL_PADDING, fonts.value.length),
  ),
);

const containerHeight = computed(
  () =>
    (cardHeight.value + ROW_GAP) *
      Math.ceil(fonts.value.length / rowNum.value) -
    ROW_GAP,
);

const reqDisplayedFontFace = () =>
  displayFonts.value
    .filter(font => !font.availableSubset)
    .forEach(async font => {
      await reqFontFace(font.fontFamily);
      font.availableSubset = true;
    });

throttledWatch(endInd, reqDisplayedFontFace, {
  throttle: REQ_THROTTLE_TIMEOUT,
  leading: false,
});

onMounted(reqDisplayedFontFace);

/* router */

const router = useRouter();
const vScrollContainer = ref<HTMLElement>();

const handleRoute = ({ target }: MouseEvent) => {
  if (target === vScrollContainer.value) {
    return;
  }

  const targetElement = target as HTMLElement;
  let fontFamily = targetElement.dataset.fontFamily;

  if (!fontFamily) {
    const { offsetParent } = targetElement;

    if (!offsetParent) {
      return;
    }

    fontFamily = (offsetParent as HTMLElement).dataset.fontFamily;
  }

  if (!fontFamily) {
    return;
  }

  router.push({
    path: 'detail',
    params: { fontName: fontFamily },
  });
};
</script>
