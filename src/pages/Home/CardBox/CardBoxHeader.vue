<template>
  <div class="card-box-header">
    <p class="card-box-header__title typo-title" v-text="name" />
    <div class="card-box-header__subtitle">
      <p
        class="card-box-header__subtitle--author typo-subtitle"
        v-text="author"
      />
      <p class="typo-subtitle">{{ stylesLen }} Styles</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  stylesLen: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card-box-header {
  display: flex;
  flex-direction: column;

  &__title {
    word-break: break-all;
  }

  &__subtitle {
    display: flex;
    margin-top: 8px;
    justify-content: space-between;

    &--author {
      color: var(--subtitle-color);
    }
  }
}
</style>
