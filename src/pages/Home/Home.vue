<template>
  <div class="home">
    <modifier-bar class="home__modifier" />
    <p class="typo-text">
      {{ searchContent === '' ? allFontsLength : filteredFonts.length }} 종류의
      폰트가 있어요.
    </p>
    <section class="home__cards">
      <card-box
        v-for="(font, ind) in filteredFonts"
        :key="`${font.fontFamily}-${ind}`"
        :font="font"
        @click="
          router.push({
            name: 'detail',
            params: { fontName: font.fontFamily },
          })
        "
      />
    </section>

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
import CardBox from './CardBox/CardBox.vue';
import ButtonBox from '../../components/ButtonBox.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, onMounted, ref, toRefs } from 'vue';

const store = useStore();
const { fonts, searchContent, inftyScroll } = toRefs(store.state);
const { allFontsLength } = store.state.env;

const router = useRouter();

const filteredFonts = computed(() =>
  fonts.value
    .filter(({ fontFamily, author, name }) => {
      const re = RegExp(searchContent.value.toLowerCase());
      return (
        re.test(fontFamily.toLowerCase()) ||
        re.test(author.toLowerCase()) ||
        re.test(name.toLowerCase())
      );
    })
    .sort(),
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
@import '../../styles/display.scss';

.home {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;

  &__modifier {
    margin-bottom: 18px;
  }

  &__cards {
    display: grid;
    margin-top: 12px;
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
    row-gap: 12px;
    column-gap: 16px;

    @include mobile {
      grid-template-columns: minmax(100%, auto);
    }
  }

  &__enable-infty-scroll {
    text-align: center;
    margin-top: 18px;
  }
}
</style>
