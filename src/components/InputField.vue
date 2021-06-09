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
    <span
      class="input-field__icon icon material-icons-outlined"
      :class="{ hide: value === '' }"
      @click="clearInput"
      >close</span
    >
  </div>
</template>

<script setup>
import { defineProps, toRefs, useContext } from 'vue';

const ctx = useContext();

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

const clearInput = ({ target }) =>
  ctx.emit('update:value', (target.value = ''));
</script>

<style lang="scss" scoped>
.input-field {
  display: flex;
  align-items: center;
  width: 100%;

  &__input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
  }

  &__icon {
    font-size: 18px;
    color: var(--text-color);

    &.hide {
      display: none;
    }
  }
}
</style>
