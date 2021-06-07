<template>
  <div class="top-button">
    <span class="top-button__icon icon material-icons-outlined"
      >arrow_upward</span
    >
  </div>
</template>

<style lang="scss" scoped>
.top-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 50%;
  background-color: var(--top-button-background-color);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  user-select: none;
  cursor: pointer;

  &__icon {
    color: var(--text-color);
  }
}
</style>
