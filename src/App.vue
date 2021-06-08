<template>
  <div class="app">
    <header-panel />
    <main>
      <router-view />
    </main>
    <footer-panel />
  </div>

  <top-button class="top-button" />
  <snackbar-box />
</template>

<script setup>
import HeaderPanel from './pages/share/HeaderPanel.vue';
import FooterPanel from './pages/share/FooterPanel.vue';
import SnackbarBox from './components/SnackbarBox/SnackbarBox.vue';
import TopButton from './components/TopButton.vue';
</script>

<style lang="scss" scoped>
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
    padding: 24px;
  }
}

.top-button {
  position: fixed;
  right: 1em;
  bottom: 1em;
}
</style>
