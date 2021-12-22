<template>
  <div class="container">
    <slot />
    <ThemeButton
      style="position: fixed; left: 1em; bottom: 1em; z-index: 999"
    />
  </div>
</template>

<script lang="ts" setup>
import ThemeButton from 'components/nav/ThemeButton.vue';
</script>

<style lang="scss" scoped>
html .container {
  background-color: #fff;
  min-height: 100vh;
}

html.dark .container {
  background-color: rgba(38, 38, 38, 1);
}
</style>

<style lang="scss">
body {
  padding: 0 !important;
}
</style>
