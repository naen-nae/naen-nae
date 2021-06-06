<template>
  <div class="snackbar-item">
    <p class="snackbar-item__content typo-subtitle"><slot /></p>
    <span
      class="snackbar-item__icon icon material-icons-outlined"
      @click="$emit('close', $event.target.parentElement.dataset.key)"
    >
      close
    </span>
  </div>
</template>

<style lang="scss" scoped>
.snackbar-item {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 38px;
  padding: 4px 12px;

  border-radius: 5px;
  background-color: var(--snackbar-background-color);

  &__content {
    color: var(--snackbar-color);
    margin-right: 18px;
  }

  &__icon {
    font-size: 18px;
    color: var(--snackbar-color);
  }
}
</style>
