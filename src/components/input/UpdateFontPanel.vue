<template>
  <div
    class="border rounded-full flex border-true-gray-200 h-[48px] px-[12px] update-font-panel justify-between"
    dark="border-true-gray-500"
  >
    <SearchPanel class="w-full" />
    <UpdateFontSizePanel class="w-full <md:hidden" />
    <ResetButton class="<md:hidden" />
  </div>
</template>

<script lang="ts" setup>
import SearchPanel from './SearchPanel.vue';
import UpdateFontSizePanel from './UpdateFontSizePanel.vue';
import ResetButton from '../buttons/ResetButton.vue';
</script>

<style lang="scss" scoped>
.update-font-panel {
  & > *::before {
    @apply bg-gray-color h-[48px] mx-[12px] w-[1px];
    content: ' ';
  }

  & > *:first-child::before {
    @apply h-0 mx-0 w-0;
    content: '';
  }
}
</style>
