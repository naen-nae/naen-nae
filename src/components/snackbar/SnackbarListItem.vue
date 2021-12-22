<template>
  <div
    class="rounded-md bg-true-gray-700 shadow-md min-h-[38px] min-w-24 py-1 px-3 inline-flex justify-between items-center animation bounce-in"
  >
    <p class="mr-4 text-white typo-subtitle"><slot /></p>
    <IconButton class="text-white text-size-[18px]" @click="$emit('close')"
      >close</IconButton
    >
  </div>
</template>

<script lang="ts" setup>
import IconButton from '../buttons/IconButton.vue';
</script>
