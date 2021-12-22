<template>
  <div
    class="border border-link-color rounded cursor-opacity cursor-pointer py-1 px-3 the-button inline-flex justify-center items-center"
  >
    <IconButton class="mr-2 icon" v-if="icon">{{ icon }}</IconButton>
    <span class="text typo-subtitle typo-link-color"><slot /></span>
  </div>
</template>

<script lang="ts" setup>
import IconButton from './IconButton.vue';

defineProps<{
  icon?: string;
}>();
</script>

<style lang="scss" scoped>
.the-button {
  @apply duration-100;
  transition-property: shadow, opacity;

  .text,
  .icon {
    @apply typo-link-color;
  }
}
</style>
