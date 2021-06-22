<template>
  <div class="font-size-modifier">
    <div class="font-size-modifier__input">
      <input-field
        class="typo-text"
        max-length="2"
        v-model:value="inputValue"
        :value="inputValue"
        :clear="false"
      />
      <span class="typo-text">px</span>
    </div>
    <slide-bar
      class="font-size-modifier__slide-bar"
      :min="constants.MIN_FONT_SIZE"
      :max="constants.MAX_FONT_SIZE"
      :value="slideValue"
      v-model:value="slideValue"
    />
  </div>
</template>

<script setup>
import { ref, toRefs, watch } from 'vue';
import SlideBar from './SlideBar.vue';
import InputField from './InputField.vue';
import constants from '../constants';
import { useStore } from 'vuex';

const store = useStore();
const { fontSize } = toRefs(store.state);

const slideValue = ref(store.state.fontSize);
const inputValue = ref(store.state.fontSize);

// update state (sync)
watch(slideValue, () => store.commit('setFontSize', slideValue.value));
watch(inputValue, () => store.commit('setFontSize', inputValue.value));

// update font size value (sync)
watch(fontSize, () => {
  slideValue.value = fontSize.value;
  inputValue.value = fontSize.value;
});
</script>

<style lang="scss" scoped>
.font-size-modifier {
  display: flex;
  align-items: center;
  width: 100%;

  &__input {
    flex: 1;
    display: flex;
    margin-right: 18px;
  }

  &__slide-bar {
    flex: 8;
    width: 100%;
  }
}
</style>
