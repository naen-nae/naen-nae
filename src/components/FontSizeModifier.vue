<template>
  <div class="font-size-modifier">
    <p class="font-size-modifier__text typo-text">{{ value }} px</p>
    <slide-bar
      class="font-size-modifier__slide-bar"
      :min="constants.MIN_FONT_SIZE"
      :max="constants.MAX_FONT_SIZE"
      :value="value"
      v-model:value="value"
    />
  </div>
</template>

<script setup>
import { ref, toRefs, watch } from 'vue';
import SlideBar from './SlideBar.vue';
import constants from '../constants';
import { useStore } from 'vuex';

const store = useStore();
const { fontSize } = toRefs(store.state);

// default value
const value = ref(store.state.fontSize);

// update state
watch(value, () => store.commit('setFontSize', value.value));

// update font size value
watch(fontSize, () => (value.value = fontSize.value));
</script>

<style lang="scss" scoped>
.font-size-modifier {
  display: flex;
  align-items: center;
  width: 100%;

  &__text {
    flex: none;
    margin-right: 18px;
    user-select: none;
  }

  &__slide-bar {
    width: 100%;
  }
}
</style>
