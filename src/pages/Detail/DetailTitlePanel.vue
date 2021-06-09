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
          <span class="typo-subtitle">
            폰트 파일 다운로드 중... ({{ downloadProgress }} /
            {{ files.length }})
          </span>
        </template>
        <template v-else-if="isZip">
          <span class="typo-subtitle">
            파일 압축중... ({{ zipProgress }} %)
          </span>
        </template>
        <template v-else>
          <span class="typo-subtitle" @click="downloadFont">폰트 다운로드</span>
        </template>
      </button-box>
    </div>
  </section>
</template>

<script setup>
import { defineProps, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import ButtonBox from '../../components/ButtonBox.vue';
import zip from '../../share/zip';
import req from '../../share/req';
import map from 'lodash/map';

const router = useRouter();

const {
  font: { files, fontFamily, author },
} = defineProps({
  font: {
    type: Object,
    required: true,
  },
});

const { isDownload, isZip, downloadProgress, zipProgress } = toRefs(
  reactive({
    isDownload: false,
    isZip: false,
    downloadProgress: 0,
    zipProgress: 0,
  }),
);

const downloadFont = async () => {
  isDownload.value = true;

  const resps = await Promise.all(
    map(
      files,
      async url =>
        await req(url).then(resp => (downloadProgress.value++, resp)),
    ),
  );

  isDownload.value = false;
  isZip.value = true;

  await zip({
    blobs: map(resps, async resp => resp.blob()),
    names: files.map(src => src.match(/.*\/(.*)$/)[1]),
    zipName: `${fontFamily}.zip`,
    progressCb: ({ percent }) => (zipProgress.value = parseInt(percent)),
  });

  isZip.value = false;
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
