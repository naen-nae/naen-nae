<template>
  <input
    class="slide-bar"
    type="range"
    :min="min"
    :max="max"
    :value="value"
    :style="setBackground"
    @input="updateBackground"
    @change="$emit('update:value', $event.target.value)"
  />
</template>

<script setup>
import { computed, defineProps, toRefs } from 'vue';

const props = defineProps({
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: 100,
  },
  value: {
    type: String,
    required: true,
  },
});

const { min, max } = props;
const { value } = toRefs(props);

const getBackgroundStyle = value => {
  const mid = ((value - min) / (max - min)) * 100;
  return `linear-gradient(to right, var(--slider-color) 0%, var(--slider-color) ${mid}%, var(--slider-background-color) ${mid}%, var(--slider-background-color) 100%)`;
};

const setBackground = computed(() => ({
  background: getBackgroundStyle(parseInt(value.value)),
}));

const updateBackground = ({ target }) =>
  target.style.setProperty(
    'background',
    getBackgroundStyle(parseInt(target.value)),
  );
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
