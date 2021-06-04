<template>
  <input
    class="input-field__input typo-text"
    :placeholder="placeholder"
    @input="$emit('update:value', $event.target.value)"
  />
</template>

<script setup>
import { defineProps } from 'vue';

const { placeholder } = defineProps({
  placeholder: {
    type: String,
    default: '무엇이든 입력해보세요',
  },
});
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
}
</style>
