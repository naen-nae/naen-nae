<template>
  <IconButton :class="{ turn: isDark }" @click="toggleDark()">{{
    isDark ? 'brightness_low' : 'brightness_high'
  }}</IconButton>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';
import IconButton from 'components/IconButton.vue';

const isDark = useDark({
  attribute: 'color-scheme',
  valueDark: 'dark',
});
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped>
.turn {
  transform: rotate(360deg);
}
</style>
