<template>
  <div class="top-button" :class="{ hidden: hide }" @click="scrollToTop">
    <IconButton>arrow_upward</IconButton>
  </div>
</template>

<script lang="ts" setup>
import IconButton from './IconButton.vue';

const { y } = useWindowScroll();
const hide = computed(() => y.value < 1);

const scrollToTop = () => window.scrollTo(0, 0);
</script>

<style lang="scss" scoped>
.top-button {
  @apply bg-white rounded-full cursor-opacity cursor-pointer flex-center p-[12px] right-4 bottom-4 fixed;
  @apply md:right-10 md:bottom-32 dark:bg-true-gray-700;

  transition-property: box-shadow, opacity;

  width: 58px;
  height: 58px;

  &.hidden {
    display: none;
  }
}
</style>
