<template>
  <div class="flex items-center w-full">
    <input
      class="typo-text flex-1 border-none outline-none bg-transparent"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :value="modelValue"
      @input="handleInput"
      @keypress="keyFilter"
    />
    <IconButton
      v-if="clearable && modelValue !== ''"
      class="text-size-[18px]"
      @click="clearInput"
      >close</IconButton
    >
  </div>
</template>

<script lang="ts" setup>
import { getModelValueUpdator } from 'src/composables/modelValue';
import IconButton from 'components/buttons/IconButton.vue';

const props = withDefaults(
  defineProps<{
    modelValue: string;
    placeholder?: string;
    mask?: string;
    maxLength?: number;
    clearable?: boolean;
  }>(),
  {
    placeholder: '무엇이든 입력해보세요',
    mask: '.*',
    clearable: true,
  },
);

const { mask } = props;

const keyFilter = (evt: KeyboardEvent) => {
  const { key: value } = evt;

  if (!new RegExp(mask).test(value)) {
    evt.preventDefault();
  }
};

const { handleInput, emit } = getModelValueUpdator(getCurrentInstance())!;

const clearInput = () => {
  emit('update', '');
  emit('update:modelValue', '');
};
</script>
