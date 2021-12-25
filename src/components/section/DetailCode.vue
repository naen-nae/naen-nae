<template>
  <div class="flex flex-col gap-y-4">
    <p class="typo-title">사용하기</p>
    <CodeCard
      v-for="[title, code] in codes"
      :key="title"
      :title="title"
      :code="code"
    />
  </div>
</template>

<script lang="ts" setup>
import { FONT_DATA_BASE_URL } from 'src/constants';
import { Font } from 'src/types/Font';
import CodeCard from '../cards/CodeCard.vue';

const {
  font: { fontFamily },
} = defineProps<{
  font: Font;
}>();

const CSS_FILE_URL = `${FONT_DATA_BASE_URL}/css/${fontFamily}.css`;

const codes = [
  ['<link>', `<link href="${CSS_FILE_URL}" rel="stylesheet">`],
  ['@import', `@import url('${CSS_FILE_URL}');`],
  ['CSS font-family', `font-family: '${fontFamily}', sans-serif;`],
];
</script>
