<template>
  <div class="snackbar">
    <div class="snackbar__item" v-for="{ msg, key } in msgs" :key="key">
      <snackbar-item :data-key="key" @close="closeSnackbar">
        {{ msg }}
      </snackbar-item>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { useStore } from 'vuex';
import SnackbarItem from './SnackbarItem.vue';

const store = useStore();
const { snackbarMsgs: msgs } = toRefs(store.state);

const closeSnackbar = key => store.commit('removeSnackbar', key);
</script>

<style lang="scss" scoped>
.snackbar {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 1em;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  padding: 0 24px;

  & > * {
    width: 100%;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
