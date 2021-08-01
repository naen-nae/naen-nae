<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="(header, ind) in headers"
          :key="`${header}-${ind}`"
          class="typo-text"
          v-text="header"
        />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="([category, description, allow], ind) in bodies"
        :key="`${category}-${ind}`"
      >
        <td class="typo-text" v-text="category" />
        <td class="typo-text" v-text="description" />
        <td class="typo-text" v-text="allow ? 'O' : 'X'" />
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import zip from 'lodash/zip';

const { summary } = defineProps({
  summary: {
    type: Object,
    required: true,
  },
});

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

const headers = ['카테고리', '사용 범위', '허용 여부'];
const bodies = zip(categories, descriptions, Object.values(summary));
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  text-align: center;

  td {
    padding: 6px;
  }
}
</style>
