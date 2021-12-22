<template>
  <div class="flex items-center">
    <input
      class="bg-transparent border-none outline-none flex-1 w-full typo-text"
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
    <span class="typo-text"><slot name="postfix"></slot></span>
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
