<template>
  <input
    type="range"
    class="bg-transparent cursor-pointer outline-transparent h-[2px] slide-bar appearance-none"
    :min="min"
    :max="max"
    :value="modelValue"
    :style="backgroundStyle"
    @input="handleInput"
  />
</template>

<script lang="ts" setup>
import { getModelValueUpdator } from 'src/composables/modelValue';
import { isDark } from 'src/composables/theme';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    min?: number;
    max?: number;
  }>(),
  {
    min: 1,
    max: 100,
  },
);

const { min, max } = props;
const { modelValue } = toRefs(props);

const backgroundStyle = computed(() => {
  const value = parseInt(modelValue.value);
  const mid = ((value - min) / (max - min)) * 100;

  let sliderColor = '#2563eb';
  let sliderBackgroundColor = '#dbeafe';

  if (isDark.value) {
    sliderColor = '#93c5fd';
    sliderBackgroundColor = '#1e3a8a';
  }

  const gradientValues = [
    'to right',
    `${sliderColor} 0%`,
    `${sliderColor} ${mid}%`,
    `${sliderBackgroundColor} ${mid}%`,
    `${sliderBackgroundColor} 100%`,
  ];
  const backgroundStyle = `linear-gradient(${gradientValues.join(',')})`;

  return {
    background: backgroundStyle,
  };
});

const { handleInput } = getModelValueUpdator(getCurrentInstance())!;
</script>

<style lang="scss" scoped>
.slide-bar::-webkit-slider-thumb {
  @apply cursor-pointer bg-blue-600 rounded-1 h-[14px] w-[14px] appearance-none;
  @apply dark:bg-blue-300;
}
</style>
