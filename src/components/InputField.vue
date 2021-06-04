<template>
  <input
    class="input-field__input typo-text"
    :placeholder="placeholder"
    @input="$emit('update:value', $event.target.value)"
    @keypress="keyFilter"
    :maxlength="maxLength"
  />
</template>

<script setup>
import { defineProps } from 'vue';

const { placeholder, mask } = defineProps({
  placeholder: {
    type: String,
    default: '무엇이든 입력해보세요',
  },
  mask: {
    type: String,
    default: '.*',
  },
  maxLength: {
    type: String,
    default: '',
  },
});

const keyFilter = evt => {
  const { key: value } = evt;

  if (!new RegExp(mask).test(value)) {
    evt.preventDefault();
  }
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
}
</style>
