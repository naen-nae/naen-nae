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
  @apply bg-white rounded-full cursor-pointer flex-center shadow opacity-70 p-[12px] transition-shadow transition-opacity right-4 bottom-4 fixed;
  @apply md:right-[40px] md:bottom-[40px] dark:bg-true-gray-700 dark:shadow-warm-gray-700 hover:shadow-md hover:opacity-100;

  width: 58px;
  height: 58px;

  &.hidden {
    display: none;
  }
}
</style>
