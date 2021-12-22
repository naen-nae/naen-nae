<template>
  <div class="flex flex-col">
    <div
      class="border-gray-color mb-4 top-0 z-10"
      :class="{
        'border-b bg-white dark:bg-true-gray-800 sticky': stickyUpdateFontPanel,
      }"
    >
      <UpdateFontPanel :class="{ 'border-0': stickyUpdateFontPanel }" />
    </div>

    <p class="mb-3 typo-text">
      <template v-if="search === ''"
        >{{ filteredFonts.length }} 개의 폰트가 있어요</template
      >
      <template v-else
        >{{ filteredFonts.length }} 개의 폰트를 불러왔어요.</template
      >
    </p>

    <CardListPanel :fonts="filteredFonts" />
  </div>
</template>

<script lang="ts" setup>
import UpdateFontPanel from 'src/components/input/UpdateFontPanel.vue';
import { useFontStore } from 'src/store/font';
import CardListPanel from 'src/components/cards/CardListPanel.vue';
import { isSearch } from 'hangul-chosung-search-js';

const store = useFontStore();
const { search, fonts } = storeToRefs(store);

const filteredFonts = computed(() =>
  fonts.value.filter(({ fontFamily, author, name }) => {
    try {
      const searchValue = search.value;
      const re = new RegExp(searchValue.toLowerCase());

      return [fontFamily, author, name].some(
        str =>
          re.test(str.toLowerCase()) ||
          isSearch(searchValue, str.replaceAll(/\s/g, '')),
      );
    } catch {}

    return false;
  }),
);

const { y } = useWindowScroll();
const stickyUpdateFontPanel = computed(() => y.value > 0);
</script>
