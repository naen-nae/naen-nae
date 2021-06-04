<template>
  <div class="search-box">
    <span class="search-box__icon material-icons-outlined">search</span>
    <input-field placeholder="이름으로 폰트 검색하기" />
  </div>
</template>

<script setup>
import InputField from './InputField.vue';
</script>

<style lang="scss" scoped>
.search-box {
  display: flex;

  &__icon {
    user-select: none;
    margin-right: 12px;
  }
}
</style>
