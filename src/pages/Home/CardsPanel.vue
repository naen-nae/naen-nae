<template>
  <transition-group name="fade-up" tag="section" class="cards-panel">
    <card-box
      v-for="(font, ind) in filteredFonts"
      :key="`${font.fontFamily}-${ind}`"
      :font="font"
      @click="
        router.push({
          name: 'detail',
          params: { fontName: font.fontFamily },
        })
      "
    />
  </transition-group>
</template>

<script setup>
import { defineProps } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import CardBox from './CardBox/CardBox.vue';

const router = useRouter();

defineProps({
  filteredFonts: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import '../../styles/display.scss';

.cards-panel {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  row-gap: 12px;
  column-gap: 16px;

  @include mobile {
    grid-template-columns: minmax(100%, auto);
  }
}

.fade-up {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
