<template>
  <div class="flex flex-col">
    <div class="border-gray-color border-b mb-8 top-0 z-10 sticky">
      <SearchPanel
        class="bg-white border-none rounded-none dark:bg-true-gray-800"
      />
    </div>

    <p class="mb-3 typo-text">
      <template v-if="search === ''"
        >{{ filteredFonts.length }} 개의 폰트가 있어요</template
      >
      <template v-else
        >{{ filteredFonts.length }} 개의 폰트를 불러왔어요.</template
      >
    </p>

    <FontCardList :fonts="filteredFonts" />
  </div>
</template>

<script lang="ts" setup>
import SearchPanel from 'components/input/SearchPanel.vue';
import { useFontStore } from 'src/store/font';
import FontCardList from 'components/cards/FontCardList.vue';
import { isSearch } from 'hangul-chosung-search-js';
import { META_DESCRIPTION, META_TITLE } from 'src/constants';
import { useTitleMeta } from 'src/composables/head';

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

useTitleMeta({
  title: META_TITLE,
  description: META_DESCRIPTION,
});
</script>
