<template>
  <input
    class="slide-bar"
    type="range"
    :min="min"
    :max="max"
    :value="modelValue"
    :style="getBackgroundStyle(modelValue)"
    @input="updateBackground"
    @change="handleChange"
  />
</template>

<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: 100,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const { min, max } = props;

const getBackgroundStyleProp = value => {
  const mid = ((value - min) / (max - min)) * 100;
  return `linear-gradient(to right, var(--slider-color) 0%, var(--slider-color) ${mid}%, var(--slider-background-color) ${mid}%, var(--slider-background-color) 100%)`;
};

const getBackgroundStyle = value => ({
  background: getBackgroundStyleProp(parseInt(value)),
});

const updateBackground = ({ target }) =>
  target.style.setProperty(
    'background',
    getBackgroundStyleProp(parseInt(target.value)),
  );

const emits = defineEmits(['change', 'update:modelValue']);
const handleChange = ({ target: { value } }) => {
  emits('change', value);
  emits('update:modelValue', value);
};
</script>

<style lang="scss" scoped>
.slide-bar {
  appearance: none;
  height: 2px;
  background: transparent;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    cursor: pointer;
    border-radius: 50%;
    background: var(--slider-color);
  }
}
</style>
