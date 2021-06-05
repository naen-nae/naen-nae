<template>
  <div class="button-box" ref="buttonBox">
    <span class="button-box__text typo-text"><slot /></span>
  </div>
</template>

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

  &__text {
    color: var(--link-color);
  }

  &:hover {
    filter: brightness(0.75);
  }
}
</style>
