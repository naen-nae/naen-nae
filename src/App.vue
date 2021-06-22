<template>
  <div class="app">
    <header-panel />
    <main>
      <router-view />
    </main>
    <div class="app__top-button" ref="topButton">
      <top-button />
    </div>
    <footer-panel />
  </div>

  <snackbar-box />
</template>

<script setup>
import HeaderPanel from './pages/share/HeaderPanel.vue';
import FooterPanel from './pages/share/FooterPanel.vue';
import SnackbarBox from './components/SnackbarBox/SnackbarBox.vue';
import TopButton from './components/TopButton.vue';
import { ref } from 'vue';
import { onMounted } from '@vue/runtime-core';

const topButton = ref();

onMounted(() =>
  new IntersectionObserver(([{ isIntersecting }]) =>
    topButton.value.classList[isIntersecting ? 'add' : 'remove'](
      'absolute-bottom',
    ),
  ).observe(topButton.value),
);
</script>

<style lang="scss" scoped>
@import './styles/display.scss';

.app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);

  main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 69px;

    @include mobile {
      & {
        padding: 12px;
      }
    }
  }

  &__top-button {
    position: fixed;
    height: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    transition: opacity 0.3s ease;

    @include desktop {
      &.absolute-bottom {
        position: sticky;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
