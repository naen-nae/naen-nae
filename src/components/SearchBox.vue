<template>
  <div class="search-box">
    <span class="search-box__icon icon material-icons-outlined">search</span>
    <input-field
      placeholder="이름으로 폰트 검색하기"
      v-model:value="inputSearchContent"
      :value="inputSearchContent"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import InputField from './InputField.vue';

const store = useStore();

// update search content
const inputSearchContent = ref(store.state.searchContent);
watch(inputSearchContent, () =>
  store.commit('setSearchContent', inputSearchContent.value),
);
</script>

<style lang="scss" scoped>
.search-box {
  display: flex;
  align-items: center;

  &__icon {
    cursor: default;
    margin-right: 12px;
    color: var(--text-color);
  }
}
</style>
