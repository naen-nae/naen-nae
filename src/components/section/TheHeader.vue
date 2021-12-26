<template>
  <header
    class="border-b border-gray-color flex p-2 py-4 justify-between items-center"
  >
    <AppTitle />
    <ThemeButton />
  </header>
</template>

<script lang="ts" setup>
import ThemeButton from '../buttons/ThemeButton.vue';
import AppTitle from './AppTitle.vue';
</script>
