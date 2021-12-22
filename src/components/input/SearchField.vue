<template>
  <div class="flex items-center">
    <IconButton class="cursor-default mr-[12px]">search</IconButton>
    <InputField
      class="w-full"
      placeholder="이름 또는 초성으로 폰트 검색하기"
      v-model="search"
    />
  </div>
</template>

<script lang="ts" setup>
import { useFontStore } from 'src/store/font';
import IconButton from 'components/buttons/IconButton.vue';
import InputField from 'components/input/InputField.vue';

const store = useFontStore();
const { search } = storeToRefs(store);
</script>
