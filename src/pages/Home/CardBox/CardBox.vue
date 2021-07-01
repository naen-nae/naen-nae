<template>
  <div class="card-box" :style="{ height }">
    <div class="card-box__header">
      <card-box-header
        :author="font.author"
        :stylesLen="font.files.length"
        :name="font.name"
      />
      <hr />
      <div class="card-box__contents">
        <transition name="fade-up">
          <p
            v-show="font.enable"
            :style="{ fontSize: `${fontSize}px`, fontFamily: font.fontFamily }"
            v-text="textContent !== '' ? textContent : font.author"
          />
        </transition>
        <p v-if="!font.enable" class="typo-subtitle">
          폰트를 불러오고 있어요...
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardBoxHeader from './CardBoxHeader.vue';
import { computed, defineProps, toRefs } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const { textContent, fontSize } = toRefs(store.state);

defineProps({
  font: {
    type: Object,
    required: true,
  },
});

const height = computed(
  () => `${141 + (fontSize.value > 33 ? fontSize.value - 33 * 1.2 : 0)}px`,
);
</script>

<style lang="scss" scoped>
@import '../../../styles/transition.scss';

.card-box {
  padding: 12px;
  min-height: 141px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    filter: brightness(0.85);
  }

  &__contents {
    word-break: break-all;
    color: var(--text-color);

    p {
      white-space: nowrap;
      overflow: visible;
      line-height: 1.2;
    }
  }
}
</style>
