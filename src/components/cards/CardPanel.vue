<template>
  <div class="border-gray-color card-panel"
    <div class="flex flex-col">
      <p class="typo-title" v-text="font.name" />
      <div class="flex mt-[8px] justify-between typo-subtitle">
        <p
          class="text-true-gray-400 dark:text-true-gray-400"
          v-text="font.author"
        />
        <p>{{ font.files.length }} 스타일</p>
      </div>
    </div>
    <hr />
    <div
      class="break-all overflow-y-hidden overflow-x-scroll dark:text-gray-50"
    >
      <transition name="fade-up">
        <p
          v-show="font.availableSubset"
          class="leading-tight overflow-visible whitespace-nowrap"
          :style="{ fontSize: `${size}px`, fontFamily: font.family }"
        >
          다람쥐 헌 쳇바퀴에 타고파 abcdefghijklmnopqrstuvwxyz 0123456789
          !@#$%^&*()_+=-
        </p>
      </transition>
      <p v-if="!font.availableSubset" class="typo-subtitle">
        폰트를 불러오고 있어요...
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFontStore } from 'src/store/font';
import { Font } from 'src/types/Font';

defineProps<{
  font: Font;
}>();

const store = useFontStore();
const { size } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.card-panel {
  @apply border rounded-md cursor-pointer shadow-transparent min-h-[141px] p-[12px] overflow-hidden;
  @apply transform-gpu transition translate-y-0 duration-300;
  @apply hover:shadow-lg hover:-translate-y-0.5;
}

.fade-up {
  &-enter-active,
  &-leave-active {
    @apply transform-gpu transition translate-y-0 duration-500;
  }

  &-enter-from,
  &-leave-to {
    @apply opacity-0 translate-y-[10px];
  }
}
</style>
