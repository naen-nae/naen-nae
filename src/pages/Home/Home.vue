<template>
  <div class="home">
    <modifier-bar class="home__modifier" />
    <p class="typo-text" v-if="searchContent === ''">
      {{ allFontsLength }} 종류의 폰트가 있어요.
    </p>
    <p class="typo-text" v-else>
      {{ filteredFonts.length }} 종류의 폰트를 불러왔어요.
    </p>
    <cards-panel class="home__cards" :filtered-fonts="filteredFonts" />

    <div class="home__enable-infty-scroll">
      <button-box v-if="!inftyScroll" @click="enableInftyScroll">
        폰트 계속 보기
      </button-box>
    </div>

    <div ref="observer" />
  </div>
</template>

<script setup>
import ModifierBar from './ModifierBar.vue';
import ButtonBox from '../../components/ButtonBox.vue';
import CardsPanel from './CardsPanel.vue';
import { useStore } from 'vuex';
import { computed, onMounted, ref, toRefs } from 'vue';

const store = useStore();
const { fonts, searchContent, inftyScroll } = toRefs(store.state);
const { allFontsLength } = store.state.env;

const filteredFonts = computed(() =>
  fonts.value.filter(({ fontFamily, author, name }) => {
    const re = RegExp(searchContent.value.toLowerCase());
    return (
      re.test(fontFamily.toLowerCase()) ||
      re.test(author.toLowerCase()) ||
      re.test(name.toLowerCase())
    );
  }),
);

const enableInftyScroll = () => {
  store.commit('enableInftyScroll');
  store.dispatch('addNextFonts');
};

const observer = ref();

onMounted(() => {
  new IntersectionObserver(([{ isIntersecting }]) => {
    if (inftyScroll.value && isIntersecting) {
      store.dispatch('addNextFonts');
    }
  }).observe(observer.value);
});
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

  &__enable-infty-scroll {
    text-align: center;
    margin-top: 18px;
  }
}
</style>
