<template>
  <span
    class="material-icons-outlined"
    :class="{ turn: isLight }"
    @click="toggleTheme"
  >
    {{ isLight ? 'brightness_high' : 'brightness_low' }}
  </span>
</template>

<script setup>
import { toRefs } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const { isLight } = toRefs(store.state);

const toggleTheme = () => {
  const htmlEl = document.querySelector('html');

  htmlEl.classList.toggle('theme-light');
  htmlEl.classList.toggle('theme-dark');

  store.commit('toggleTheme');
};
</script>

<style lang="scss" scoped>
span {
  cursor: pointer;
  user-select: none;
  transition: transform 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  color: var(--text-color);
}

.turn {
  transform: rotate(360deg);
}
</style>
