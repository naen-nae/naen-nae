<template>
  <div class="home">
    <modifier-bar class="home__modifier" />
    <p class="typo-text" v-if="searchContent === ''">
      {{ fonts.length }} 종류의 폰트가 있어요.
    </p>
    <p class="typo-text" v-else>
      {{ filteredFonts.length }} 종류의 폰트를 불러왔어요.
    </p>
    <cards-panel class="home__cards" />
  </div>
</template>

<script setup>
import * as Hangul from 'hangul-chosung-search-js';
import ModifierBar from './ModifierBar.vue';
import CardsPanel from './CardsPanel.vue';
import { useStore } from 'vuex';
import { computed, provide, toRefs } from 'vue';

const store = useStore();
const { fonts, searchContent } = toRefs(store.state);

const filteredFonts = computed(() =>
  fonts.value.filter(({ fontFamily, author, name }) => {
    const re = RegExp(searchContent.value.toLowerCase());
    return [fontFamily, author, name].some(str =>
      re.test(str.toLowerCase()) ||
      Hangul.isSearch(searchContent.value, str.replaceAll(/\s/g, ''))
    );
  }),
);

provide('filteredFonts', filteredFonts);
</script>

<style lang="scss" scoped>
.home {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;

  &__modifier {
    margin-bottom: 18px;
  }

  &__cards {
    margin-top: 12px;
  }

  &__info {
    text-align: center;
    margin-top: 18px;

    &--load-fonts-msg {
      color: var(--subtitle-color);
    }
  }
}
</style>
