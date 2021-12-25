<template>
  <div
    class="border rounded-full flex border-true-gray-200 h-[48px] px-[12px] input-list-panel justify-center dark:border-true-gray-500"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.input-list-panel {
  & > ::v-slotted(*) {
    &::before {
      @apply bg-gray-color h-[48px] mx-[12px] w-[1px];
      content: ' ';
    }

    &:first-child::before {
      @apply h-0 mx-0 w-0;
      content: '';
    }
  }
}
</style>
