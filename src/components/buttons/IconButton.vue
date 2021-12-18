<template>
  <span
    class="icon select-none cursor-pointer dark:text-gray-50 material-icons-outlined"
    ><slot></slot
  ></span>
</template>

<style lang="scss" scoped>
.icon {
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>
