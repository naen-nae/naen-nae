<template>
  <div class="button-box" ref="buttonBox">
    <span class="button-box__text typo-text"><slot /></span>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';

const { width, height } = defineProps({
  width: {
    type: String,
    default: 'auto',
  },
  height: {
    type: String,
    default: 'auto',
  },
});

const buttonBox = ref(null);

watch(buttonBox, () => {
  buttonBox.value.style.setProperty('width', width);
  buttonBox.value.style.setProperty('height', height);
});
</script>

<style lang="scss" scoped>
.button-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  cursor: pointer;
  user-select: none;
  border: 0.5px solid var(--link-color);
  border-radius: 5px;
  background-color: var(--background-color);

  &__text {
    color: var(--link-color);
  }

  &:hover {
    filter: brightness(0.95);
  }
}
</style>
