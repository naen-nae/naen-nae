<template>
  <input
    type="range"
    class="slide-bar appearance-none bg-transparent cursor-pointer h-[2px] outline-transparent"
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
const { modelValue } = toRefs(reactive(props));

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
  @apply appearance-none bg-blue-600 cursor-pointer h-[14px] w-[14px] rounded-1;
  @apply dark:bg-blue-300;
}
</style>
