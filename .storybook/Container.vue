<template>
  <div class="min-h-[100vh] dark:bg-true-gray-800">
    <slot />
    <ThemeButton
      style="position: fixed; left: 1em; bottom: 1em; z-index: 999"
    />
  </div>
</template>

<script lang="ts" setup>
import ThemeButton from 'components/nav/ThemeButton.vue';
</script>

<style lang="scss">
body {
  padding: 0 !important;
}
</style>
