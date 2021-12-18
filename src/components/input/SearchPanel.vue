<template>
  <div class="flex items-center">
    <IconButton class="mr-[12px] cursor-default">search</IconButton>
    <InputPanel
      class="w-full"
      placeholder="이름 또는 초성으로 폰트 검색하기"
      v-model="search"
    />
  </div>
</template>

<script lang="ts" setup>
import { useFontStore } from 'src/store/font';
import IconButton from 'components/buttons/IconButton.vue';
import InputPanel from 'components/input/InputPanel.vue';

const store = useFontStore();
const { search } = storeToRefs(store);
</script>
