<template>
  <div class="input-field">
    <input
      class="input-field__input typo-text"
      :placeholder="placeholder"
      @input="$emit('update:value', $event.target.value)"
      @keypress="keyFilter"
      :maxlength="maxLength"
      :value="value"
    />
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
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
  value: {
    type: String,
    default: '',
  },
});

const { mask } = props;
const { value } = toRefs(props);

const keyFilter = evt => {
  const { key: value } = evt;

  if (!new RegExp(mask).test(value)) {
    evt.preventDefault();
  }
};
</script>

<style lang="scss" scoped>
.input-field {
  display: flex;
  align-items: center;

  &__input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
  }
}
</style>
