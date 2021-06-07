<template>
  <div class="font-box">
    <p class="font-box__style typo-text" v-text="fontWeight" />
    <div class="font-box__contents">
      <p
        :style="{ fontSize: `${fontSize}px`, fontFamily, fontWeight }"
        v-text="textContent !== '' ? textContent : fontWeight"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const { textContent, fontSize } = toRefs(store.state);

defineProps({
  fontWeight: {
    type: String,
    required: true,
  },
  fontFamily: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.font-box {
  &__style {
    color: var(--subtitle-color);
  }

  &__contents {
    word-break: break-all;
    color: var(--text-color);
  }
}
</style>
