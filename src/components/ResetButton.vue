<template>
  <div class="reset-button">
    <span
      class="reset-button__icon material-icons-outlined"
      :class="{ disabled }"
      >replay</span
    >
  </div>
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
.reset-button {
  display: flex;
  align-items: center;

  &__icon {
    cursor: pointer;
    user-select: none;
    color: var(--text-color);

    &.disabled {
      opacity: 0.4;
    }
  }
}
</style>
