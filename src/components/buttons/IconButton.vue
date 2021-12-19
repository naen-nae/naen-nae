<template>
  <span
    class="cursor-pointer icon select-none material-icons-outlined dark:text-gray-50"
    :class="{ disabled }"
    @click="emitClick"
    ><slot></slot
  ></span>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  },
);

const { disabled } = toRefs(props);

const emit = defineEmits<{
  (evt: 'click'): void;
}>();

const emitClick = (evt: MouseEvent) => {
  evt.preventDefault();

  if (disabled.value) {
    return;
  }

  emit('click');
};
</script>

<style lang="scss" scoped>
.icon {
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.3s cubic-bezier(1, 0.5, 0.8, 1);

  &.disabled {
    @apply cursor-not-allowed opacity-40;
  }
}
</style>
