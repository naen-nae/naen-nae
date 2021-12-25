<template>
  <div class="flex flex-col gap-y-4">
    <p class="typo-title">라이선스</p>

    <div class="mb-2 typo-text">
      <p class="font-bold mb-4 typo-subtitle">라이선스 요약</p>

      <div class="text-center mb-3 grid gap-y-3 grid-cols-[1fr,3fr,1fr]">
        <span class="font-bold">카테고리</span>
        <span class="font-bold">사용 범위</span>
        <span class="font-bold">허용 여부</span>

        <template
          v-for="([category, description, allowed], ind) in summaryBody"
          :key="ind"
        >
          <span v-text="category" />
          <span v-text="description" />
          <span v-text="allowed ? 'O' : 'X'" />
        </template>
      </div>

      <p class="leading-normal text-true-gray-400">
        * 위 내용은 참고용으로, 정확한 사용 범위는 폰트 제작자/제작사에 확인
        바랍니다.
        <br />
        사용 범위는 폰트 제작사의 세부 규정에 따라 달라질 수 있으며, 낸내는 폰트
        소프트웨어 사용과 취급으로 발생하는 일에 대해 책임 및 의무를 가지지
        않습니다.
      </p>
    </div>

    <div class="whitespace-pre-wrap">
      <p class="font-bold mb-4 typo-subtitle">라이선스 전문</p>
      <pre class="leading-normal typo-text" v-html="parsedLicense" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Font } from 'src/types/Font';

const {
  font: { license, licenseSummary },
} = defineProps<{
  font: Font;
}>();

const categories = [
  '인쇄',
  '웹사이트',
  '영상',
  '포장지',
  '임베딩',
  'BI/CI',
  'OFL',
];
const descriptions = [
  '브로슈어, 포스터, 책, 잡지 및 출판용 인쇄물 등',
  '웹페이지, 광고 배너, 메일, E-브로슈어 등',
  '영상물 자막, 영화 오프닝/엔딩 크레딧, UCC 등',
  '판매용 상품의 패키지',
  '웹사이트 및 프로그램 서버 내 폰트 탑재, E-book 제작',
  '회사명, 브랜드명, 상품명, 로고, 마크, 슬로건, 캐치프레이즈',
  '폰트 파일의 수정/ 복제/ 배포 가능. 단, 폰트 파일의 유료 판매는 금지',
];
const summaryValues = Object.values(licenseSummary);
const summaryBody = categories.map<[string, string, boolean]>(
  (category, ind) => [category, descriptions[ind], summaryValues[ind]],
);

const parsedLicense = license.replace(
  /(https?:.*?)(\s|$)/g,
  '<a style="text-decoration: underline;" href="$1" target="_blank">$1</a>$2',
);
</script>
