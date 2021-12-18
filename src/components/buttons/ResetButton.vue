<template>
  <div class="flex items-center">
    <IconButton :disabled="disabled" @click="resetSize">replay</IconButton>
  </div>
</template>

<script lang="ts" setup>
import { DEFAULT_FONT_SIZE } from 'src/constants';
import { useFontStore } from 'src/store/font';
import IconButton from './IconButton.vue';

const store = useFontStore();
const { size } = storeToRefs(store);

const disabled = computed(() => size.value === DEFAULT_FONT_SIZE);
const resetSize = () => (size.value = DEFAULT_FONT_SIZE);
</script>
