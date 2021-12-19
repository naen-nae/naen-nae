<template>
  <div
    class="bg-white rounded-full cursor-pointer flex-center top-button shadow opacity-70 p-[12px] transition-shadow transition-opacity right-4 bottom-4 fixed"
    dark="bg-true-gray-700 shadow-warm-gray-700"
    hover="shadow-md opacity-100"
    md="right-[40px] bottom-[40px]"
    :class="{ hidden: hide }"
    @click="scrollToTop"
  >
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
  width: 58px;
  height: 58px;

  &.hidden {
    display: none;
  }
}
</style>
