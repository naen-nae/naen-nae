<template>
  <div
    class="update-font-panel border border-true-gray-200 flex h-[48px] justify-between rounded-full px-[12px]"
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
    @apply border-color h-[48px] mx-[12px] w-[1px];
    content: ' ';
  }

  & > *:first-child::before {
    @apply h-0 w-0 mx-0;
    content: '';
  }
}
</style>
