<template>
  <div
    class="flex flex-col-reverse right-4 bottom-4 z-30 gap-y-2 fixed items-end"
  >
    <div v-for="{ msg, id } in contents" :key="id">
      <SnackbarListItem @close="close(id)">
        {{ msg }}
      </SnackbarListItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSnackbarStore } from 'src/store/snackbar';
import SnackbarListItem from './SnackbarListItem.vue';

const store = useSnackbarStore();
const { contents } = storeToRefs(store);
const { close } = store;
</script>
