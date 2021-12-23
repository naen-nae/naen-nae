<template>
  <section class="grid-cols-2 block md:grid">
    <IconButton class="mb-5 col-span-2" @click="router.go(-1)">
      chevron_left
    </IconButton>
    <p class="col-span-2 typo-title" v-text="font.name" />
    <p class="pt-2 typo-subtitle <md:mb-3" v-text="font.author" />

    <div class="md:text-right">
      <TheButton v-if="isDownloading" icon="download_done">
        폰트 파일을 다운로드하고 있어요 ({{ Math.ceil(downloadProgress) }}%)
      </TheButton>

      <TheButton v-else-if="isZipping" icon="download_done">
        폰트 파일을 파일을 압축하고 있어요 ({{ Math.ceil(zipProgress) }}%)
      </TheButton>

      <TheButton
        v-else
        icon="file_download"
        @click="downloadFont(font.files, font.fontFamily)"
      >
        폰트 다운로드
      </TheButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useDownloadFont } from 'src/composables/font';
import { Font } from 'src/types/Font';
import IconButton from '../buttons/IconButton.vue';
import TheButton from '../buttons/TheButton.vue';

const router = useRouter();

defineProps<{
  font: Font;
}>();

const {
  isDownloading,
  isZipping,
  zipProgress,
  downloadProgress,
  downloadFont,
} = useDownloadFont();
</script>
