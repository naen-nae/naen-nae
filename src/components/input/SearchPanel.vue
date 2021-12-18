<template>
  <div class="flex items-center">
    <IconButton class="mr-[12px] cursor-default">search</IconButton>
    <InputPanel
      placeholder="이름 또는 초성으로 폰트 검색하기"
      v-model="search"
    />
  </div>
</template>

<script lang="ts" setup>
import { useFontStore } from 'src/store/font';
import { storeToRefs } from 'pinia';
import IconButton from 'components/IconButton.vue';
import InputPanel from 'components/input/InputPanel.vue';

const store = useFontStore();
const { search } = storeToRefs(store);
</script>
