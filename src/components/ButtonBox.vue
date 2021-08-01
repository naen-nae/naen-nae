<template>
  <div class="button-box">
    <span
      class="icon material-icons-outlined"
      v-if="icon !== '' && icon !== undefined"
      v-text="icon"
    />
    <span class="button-box__text typo-text"><slot /></span>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.button-box {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  min-height: 24px;
  cursor: pointer;
  user-select: none;
  border: 1px solid var(--link-color);
  border-radius: 5px;

  & > .icon {
    color: var(--link-color);
    margin-right: 8px;
  }

  &__text {
    color: var(--link-color);
  }

  &:hover {
    filter: brightness(0.75);
  }
}
</style>
