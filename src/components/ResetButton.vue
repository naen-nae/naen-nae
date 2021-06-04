<template>
  <span class="material-icons-outlined" :class="{ disabled }">replay</span>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
span {
  cursor: pointer;
  user-select: none;
  color: var(--text-color);

  &.disabled {
    opacity: 0.4;
  }
}
</style>
