<template>
  <div class="input-field">
    <input
      class="input-field__input typo-text"
      :placeholder="placeholder"
      @input="handleInput"
      @keypress="keyFilter"
      :maxlength="maxLength"
      :value="modelValue"
    />
    <span
      class="input-field__icon icon material-icons-outlined"
      :class="{ hide: modelValue === '' }"
      @click="clearInput"
      v-if="clear"
    >
      close
    </span>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
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
  clear: {
    type: Boolean,
    default: true,
  },
});

const { mask } = props;

const keyFilter = evt => {
  const { key: value } = evt;

  if (!new RegExp(mask).test(value)) {
    evt.preventDefault();
  }
};

const { emit } = getCurrentInstance();

const clearInput = ({ target }) => {
  target.value = '';
  emit('update', '');
  emit('update:modelValue', '');
};

const handleInput = ({ target: { value } }) => {
  emit('update', value);
  emit('update:modelValue', value);
};
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
