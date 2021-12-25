<template>
  <div>
    <p class="typo-subtitle" v-text="fontWeight" />
    <div class="typo-color overflow-y-hidden">
      <span
        :style="{ fontSize: `${size}px`, fontFamily, fontWeight }"
        class="whitespace-nowrap"
        v-text="inputText.replaceAll(' ', '') === '' ? fontWeight : inputText"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFontStore } from 'src/store/font';

defineProps<{
  fontWeight: number;
  fontFamily: string;
}>();

const store = useFontStore();
const { size, inputText } = storeToRefs(store);
</script>
