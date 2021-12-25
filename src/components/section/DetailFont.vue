<template>
  <div class="flex flex-col gap-y-4">
    <p class="typo-title">스타일</p>
    <UpdateInputTextPanel class="mb-4" />
    <FontContentCard
      v-for="(fontWeight, ind) in font.fontWeights"
      :key="`${fontWeight}-${ind}`"
      :font-weight="fontWeight"
      :font-family="font.fontFamily"
    />
  </div>
</template>

<script lang="ts" setup>
import UpdateInputTextPanel from 'components/input/UpdateInputTextPanel.vue';
import { Font } from 'src/types/Font';
import FontContentCard from '../cards/FontContentCard.vue';

defineProps<{
  font: Font;
}>();
</script>
