<template>
  <header>
    <app-title />
    <theme-button />
  </header>
</template>

<script setup>
import AppTitle from '../../components/AppTitle.vue';
import ThemeButton from '../../components/ThemeButton.vue';
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid var(--border-color);
}
</style>
