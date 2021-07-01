<template>
  <div class="v-scroll" :style="{ height: `${vScrollHeight}px` }">
    <section class="cards-panel" ref="vScrollContents">
      <card-box
        v-for="(font, ind) in displayFonts"
        :key="`${font.fontFamily}-${ind}`"
        :font="font"
        @click="
          router.push({
            name: 'detail',
            params: { fontName: font.fontFamily },
          })
        "
      />
    </section>
  </div>
</template>

<script setup>
import { inject, onMounted, onUnmounted, ref } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import CardBox from './CardBox/CardBox.vue';
import useVirtualScroll from '../../composables/useVirtualScroll';

const router = useRouter();

const filteredFonts = inject('filteredFonts');
const vScrollContents = ref();

const {
  vScrollHeight,
  displayFonts,
  updateScrollY,
  updateScreenWidth,
} = useVirtualScroll({
  fonts: filteredFonts,
  vScrollContents,
});

// init screen width
updateScreenWidth();

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth, { passive: true });
  window.addEventListener('scroll', updateScrollY, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
  window.removeEventListener('scroll', updateScrollY);
});
</script>

<style lang="scss" scoped>
@import '../../styles/display.scss';

.v-scroll {
  overflow: hidden;
  will-change: transform;
}

.cards-panel {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32%, auto));
  row-gap: 12px;
  column-gap: 16px;
  will-change: transform;

  @include mobile {
    grid-template-columns: minmax(100%, auto);
  }
}
</style>
