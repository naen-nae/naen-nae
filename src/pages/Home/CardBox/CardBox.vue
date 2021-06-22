<template>
  <div class="card-box">
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
            v-if="font.enable"
            :style="{ fontSize: `${fontSize}px`, fontFamily: font.fontFamily }"
            v-text="textContent !== '' ? textContent : font.author"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardBoxHeader from './CardBoxHeader.vue';
import { defineProps, toRefs } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const { textContent, fontSize } = toRefs(store.state);

defineProps({
  font: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import '../../../styles/transition.scss';

.card-box {
  padding: 12px;
  min-height: 141px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }

  &__contents {
    word-break: break-all;
    color: var(--text-color);
  }
}
</style>
