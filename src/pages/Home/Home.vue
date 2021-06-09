<template>
  <div class="home">
    <modifier-bar class="home__modifier" v-model:search-value="search" />
    <p class="typo-text">{{ filteredFonts.length }} 종류의 폰트가 있어요.</p>
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
  </div>
</template>

<script setup>
import ModifierBar from './ModifierBar.vue';
import CardBox from './CardBox/CardBox.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, ref, toRefs } from 'vue';

const store = useStore();
const { fonts } = toRefs(store.state);

const router = useRouter();

const search = ref('');
const filteredFonts = computed(() =>
  fonts.value
    .filter(({ fontFamily, author }) => {
      const re = RegExp(search.value.toLowerCase());
      return re.test(fontFamily.toLowerCase()) || re.test(author.toLowerCase());
    })
    .sort(),
);
</script>

<style lang="scss" scoped>
@import '../../styles/display.scss';

.home {
  align-self: flex-start;
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
}
</style>
