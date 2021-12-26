<template>
  <div class="flex items-center" ref="root">
    <IconButton class="cursor-default mr-[12px]">search</IconButton>
    <InputField
      class="w-full"
      placeholder="이름 또는 초성으로 폰트 검색하기"
      :model-value="search"
      @update:modelValue="updateSearch"
      mask="[^/]"
    />
  </div>
</template>

<script lang="ts" setup>
import { useFontStore } from 'src/store/font';
import IconButton from 'components/buttons/IconButton.vue';
import InputField from 'components/input/InputField.vue';

const store = useFontStore();
const { search } = storeToRefs(store);

const updateSearch = (newSearch: string) => {
  search.value = newSearch;
  window.scrollTo(0, 0);
};

const { slash } = useMagicKeys();
const root = ref<HTMLElement>();

watch(slash, slash => {
  if (!slash) {
    return;
  }

  const inputField = root.value?.querySelector('input');
  if (!inputField) {
    return;
  }

  inputField.focus();
});
</script>
