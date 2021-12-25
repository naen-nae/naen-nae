<template>
  <div>
    <p class="mb-3 typo-text" v-text="title" />

    <div
      class="flex bg-true-gray-200 p-1 text-true-gray-500 justify-between items-center dark:bg-true-gray-500 dark:text-true-gray-200"
    >
      <div class="mr-2 overflow-y-hidden">
        <p class="whitespace-nowrap typo-text" v-text="code" />
      </div>

      <template v-if="copied">
        <IconButton class="text-lg">done</IconButton>
      </template>
      <template v-else>
        <IconButton class="text-lg" @click="copy">content_copy</IconButton>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconButton from '../buttons/IconButton.vue';
const props = defineProps<{
  title: string;
  code: string;
}>();

const { code } = toRefs(props);
const { copy, copied } = useClipboard({ source: code });
</script>
