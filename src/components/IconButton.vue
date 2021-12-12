<template>
  <span class="icon material-icons-outlined"><slot></slot></span>
</template>

<style lang="scss" scoped>
.icon {
  -webkit-tap-highlight-color: transparent;
  color: var(--text-color);
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  user-select: none;
}
</style>
