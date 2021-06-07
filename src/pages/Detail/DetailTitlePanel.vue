<template>
  <section class="detail-title-panel">
    <div class="detail-title-panel__left-side">
      <span class="icon material-icons-outlined" @click="router.push('/')">
        chevron_left
      </span>

      <div class="detail-title-panel__left-side--info">
        <p class="typo-title" v-text="fontFamily" />
        <p class="typo-subtitle" v-text="author" />
      </div>
    </div>

    <div class="detail-title-panel__right-side">
      <button-box>
        <template #icon>
          {{ isDownload ? 'download_done' : 'file_download' }}
        </template>

        <template v-if="isDownload">
          <span class="typo-subtitle">파일 압축중...</span>
        </template>
        <template v-else>
          <span class="typo-subtitle" @click="downloadFont">폰트 다운로드</span>
        </template>
      </button-box>
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { useRouter } from 'vue-router';
import ButtonBox from '../../components/ButtonBox.vue';
import zip from '../../share/zip';

const router = useRouter();

const {
  font: { files, fontFamily, author },
} = defineProps({
  font: {
    type: Object,
    required: true,
  },
});

const isDownload = ref(false);
const downloadFont = async () => {
  isDownload.value = true;

  await zip(files, {
    fileNames: files.map(fileName => fileName.match(/.*\/(.*)$/)[1]),
    zipName: `${fontFamily}.zip`,
  });

  isDownload.value = false;
};
</script>

<style lang="scss" scoped>
@import '../../styles/display.scss';

.detail-title-panel {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @include mobile {
    display: block;
  }

  &__left-side {
    & > .icon {
      margin-bottom: 28px;
      color: var(--text-color);
    }

    &--info {
      display: flex;
      flex-direction: column;
      word-break: break-all;

      & > *:first-child {
        margin-bottom: 8px;
      }
    }
  }

  &__right-side {
    @include mobile {
      margin-top: 12px;
    }

    .typo-subtitle {
      color: var(--link-color);
    }
  }
}
</style>
