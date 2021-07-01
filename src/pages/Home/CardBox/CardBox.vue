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
            v-show="font.subsetEnable"
            :style="{ fontSize: `${fontSize}px`, fontFamily: font.fontFamily }"
          >
            다람쥐 헌 쳇바퀴에 타고파
          </p>
        </transition>
        <p v-if="!font.subsetEnable" class="typo-subtitle">
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
const { fontSize } = toRefs(store.state);

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
