<template>
  <template v-if="isInitialized">
    <template v-if="!font">
      <PageNotFound />
      <p class="text-center typo-subtitle">폰트를 찾을 수 없어요 ...</p>
    </template>

    <div v-else>
      <DetailTitle :font="font" />
      <hr />
      <DetailFont :font="font" />
      <hr />
      <DetailCode :font="font" />
      <hr />
      <DetailLicense :font="font" />
    </div>
  </template>

  <div v-else class="flex flex-col py-8 animate-pulse gap-y-4">
    <div class="h-8 w-1/4 skeleton-span" />
    <div class="h-8 w-1/2 skeleton-span" />
    <hr />
    <div class="flex gap-x-3">
      <div class="h-8 w-1/8 skeleton-span <sm:hidden" />
      <div class="h-8 w-1/2 skeleton-span" />
    </div>
    <div class="h-8 w-1/2 skeleton-span" />
    <div class="h-8 w-1/3 skeleton-span" />
    <hr />
    <div class="h-8 w-1/8 skeleton-span <sm:w-3/8" />
    <div class="h-8 w-1/2 skeleton-span" />
    <div class="h-8 w-1/3 skeleton-span" />
  </div>
</template>

<script lang="ts" setup>
import { useFontStore } from 'src/store/font';
import PageNotFound from 'src/components/section/PageNotFound.vue';
import DetailTitle from 'src/components/section/DetailTitle.vue';
import DetailFont from 'src/components/section/DetailFont.vue';
import DetailCode from 'src/components/section/DetailCode.vue';
import DetailLicense from 'src/components/section/DetailLicense.vue';
import { useTitleMeta } from 'src/composables/head';
import { META_DESCRIPTION, META_TITLE } from 'src/constants';
import { reqFontFace } from 'src/composables/font';

const store = useFontStore();
const { fonts, isInitialized } = storeToRefs(store);

const params = useUrlSearchParams();
const fontFamily = params.fontFamily?.toString();

const font = computed(() =>
  fonts.value.find(
    ({ fontFamily: targetFontFamily }) => targetFontFamily === fontFamily,
  ),
);

watchEffect(async () => {
  if (!font.value || font.value?.availableFont) {
    return;
  }

  await reqFontFace(font.value.fontFamily);
  font.value.availableFont = true;
});

const fontName = computed(() => font.value?.name ?? '폰트를 찾을 수 없어요');
const metaTitle = computed(() => `${fontName.value} :: ${META_TITLE}`);
const metaDescription = computed(
  () => `${fontName.value} :: ${META_DESCRIPTION}`,
);

useTitleMeta({
  title: metaTitle,
  description: metaDescription,
  url: fontFamily,
});
</script>

<style lang="scss" scoped>
hr {
  @apply my-7;
}
</style>
