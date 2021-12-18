<template>
  <IconButton :class="{ turn: isDark }" @click="toggleDark()">{{
    isDark ? 'brightness_low' : 'brightness_high'
  }}</IconButton>
</template>

<script lang="ts" setup>
import IconButton from 'components/IconButton.vue';
import { isDark, toggleDark } from 'src/composables/theme';
</script>

<style lang="scss" scoped>
.turn {
  transform: rotate(360deg);
}
</style>
