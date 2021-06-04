<template>
  <div class="font-size-modifier">
    <p class="font-size-modifier__text typo-text">{{ value }} px</p>
    <slide-bar
      class="font-size-modifier__slide-bar"
      :min="constants.MIN_FONT_SIZE"
      :max="constants.MAX_FONT_SIZE"
      :value="constants.DEFAILT_FONT_SIZE.toString()"
      v-model:value="value"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import SlideBar from './SlideBar.vue';
import constants from '../constants';
import { useStore } from 'vuex';

const store = useStore();

// default value
const value = ref(constants.DEFAILT_FONT_SIZE);

// update state
watch(value, () => store.commit('setFontSize', value.value));
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
