<template>
  <div class="reset-button">
    <span
      class="reset-button__icon icon material-icons-outlined"
      :class="{ disabled }"
      @click="resetFontSize"
      >replay</span
    >
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue';
import { useStore } from 'vuex';
import constants from '../constants';

const store = useStore();
const { fontSize } = toRefs(store.state);

const disabled = computed(() => fontSize.value === constants.DEFAILT_FONT_SIZE);

const resetFontSize = () => store.dispatch('resetFontSize');
</script>

<style lang="scss" scoped>
.reset-button {
  display: flex;
  align-items: center;

  &__icon {
    color: var(--text-color);

    &.disabled {
      opacity: 0.4;
    }
  }
}
</style>
