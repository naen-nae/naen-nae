<template>
  <div class="button-box" ref="buttonBox">
    <span class="button-box__text typo-text"><slot /></span>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';

const { width, height } = defineProps({
  width: {
    type: String,
    default: null,
  },
  height: {
    type: String,
    default: null,
  },
});

const buttonBox = ref(null);

onMounted(() => {
  buttonBox.value.style.setProperty('width', width ?? 'auto');
  buttonBox.value.style.setProperty('height', height ?? 'auto');
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

  &__text {
    color: var(--link-color);
  }

  &:hover {
    filter: brightness(0.75);
  }
}
</style>
