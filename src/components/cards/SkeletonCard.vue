<template>
  <div
    class="border-gray-color border rounded-md p-[12px] animate-pulse card-panel"
  >
    <div class="flex justify-between">
      <span class="h-4 w-3/5 skeleton-span" />
      <span class="h-4 w-1/6 skeleton-span" />
    </div>
    <hr />
    <div class="h-8 w-1/2 skeleton-span" />
  </div>
</template>

<style lang="scss" scoped>
.skeleton-span {
  @apply rounded-full bg-true-gray-200 inline-block;
}
</style>
