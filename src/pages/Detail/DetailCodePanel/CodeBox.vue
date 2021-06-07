<template>
  <div class="code-box">
    <p class="code-box__name typo-text" v-text="name" />

    <div class="code-box__code">
      <p class="typo-text code-box__code--code" v-text="content" />

      <template v-if="isCopied">
        <span class="icon material-icons-outlined"> done </span>
      </template>
      <template v-else>
        <span class="icon material-icons-outlined" @click="copy">
          content_copy
        </span>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import clipboard from '../../../share/clipboard';

const { content } = defineProps({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const isCopied = ref(false);
const copy = async () => {
  isCopied.value = true;

  await clipboard(content);

  setTimeout(() => (isCopied.value = false), 500);
};
</script>

<style lang="scss" scoped>
.code-box {
  &__name {
    margin-bottom: 8px;
  }

  &__code {
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 26px;
    padding: 4px;
    background-color: var(--code-background-color);

    & > .icon {
      font-size: 18px;
      color: var(--text-color);
    }

    &--code {
      margin-right: 4px;
      word-break: break-all;
      color: var(--code-color);
    }
  }
}
</style>
