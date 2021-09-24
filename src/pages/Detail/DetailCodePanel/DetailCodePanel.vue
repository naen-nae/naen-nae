<template>
  <div class="detail-code">
    <p class="typo-title">웹폰트</p>
    <code-box
      v-for="([name, content], ind) in codeBoxes"
      :key="ind"
      :name="name"
      :content="content"
    />
  </div>
</template>

<script setup>
import CodeBox from './CodeBox.vue';

const { fontFamily } = defineProps({
  fontFamily: {
    type: String,
    required: true,
  },
});

const codeBoxes = [
  [
    '<link>',
    `<link href="https://cdn.jsdelivr.net/gh/naen-nae/fonts/build/css/${fontFamily}.css" rel="stylesheet">`,
  ],
  [
    '@import',
    `@import url('https://cdn.jsdelivr.net/gh/naen-nae/fonts/build/css/${fontFamily}.css');`,
  ],
  ['CSS font-family', `font-family: '${fontFamily}', sans-serif;`],
];
</script>

<style lang="scss" scoped>
.detail-code {
  & > * {
    margin-bottom: 18px;
  }
}
</style>
