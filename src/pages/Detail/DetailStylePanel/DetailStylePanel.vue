<template>
  <div class="detail-style">
    <p class="typo-title">스타일</p>
    <style-bar />
    <font-box
      v-for="(fontWeight, ind) in fontWeights"
      :key="`${fontWeight}-${ind}`"
      :font-weight="fontWeight"
      :font-family="fontFamily"
    />
  </div>
</template>

<script setup>
import StyleBar from './StyleBar.vue';
import FontBox from './FontBox.vue';
import { defineProps } from 'vue';

const {
  font: { fontFamily, fontWeights },
} = defineProps({
  font: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.detail-style {
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 18px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
