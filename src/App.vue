<template>
  <SnackbarList />

  <main
    class="flex flex-col min-h-[100vh] px-6 transition main justify-between dark:bg-true-gray-800"
  >
    <TheHeader />
    <div class="flex-1 py-4 px-6 <md:p-3">
      <router-view />
    </div>

    <TheFooter />
  </main>

  <TopButton />
</template>

<script lang="ts" setup>
import SnackbarList from 'components/snackbar/SnackbarList.vue';
import TheFooter from 'components/section/TheFooter.vue';
import TheHeader from 'components/section/TheHeader.vue';
import TopButton from './components/buttons/TopButton.vue';
</script>

<style lang="scss" scoped>
.main {
  transition-property: background-color;
}
</style>
