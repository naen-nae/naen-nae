<template>
  <div class="detail-license">
    <p class="typo-title">라이선스</p>

    <div class="detail-license__full">
      <p class="typo-subtitle">라이선스 전문</p>
      <pre class="typo-text" v-html="parsedLicense" />
    </div>

    <div class="detail-license__summary">
      <p class="typo-subtitle">라이선스 요약</p>
      <summary-table :summary="licenseSummary" />
      <p class="typo-text">
        * 위 내용은 참고용으로, 정확한 사용 범위는 폰트 제작자/제작사에 확인
        바랍니다.
        <br />
        사용 범위는 폰트 제작사의 세부 규정에 따라 달라질 수 있으며, 낸내는 폰트
        소프트웨어 사용과 취급으로 발생하는 일에 대해 책임 및 의무를 가지지
        않습니다.
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import SummaryTable from './SummaryTable.vue';

const { license, licenseSummary } = defineProps({
  license: {
    type: String,
    required: true,
  },
  licenseSummary: {
    type: Object,
    required: true,
  },
});

const parsedLicense = license.replace(
  /(https?:.*)(\s|$)/,
  '<a style="color: var(--text-color); text-decoration: underline;" href="$1" target="_blank">$1</a>',
);
</script>

<style lang="scss" scoped>
.detail-license {
  & > * {
    margin-bottom: 18px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .typo-subtitle {
    font-weight: bold;
    margin-bottom: 8px;
  }

  &__full > .typo-text {
    white-space: pre-wrap;
  }

  &__summary > .typo-text {
    margin-top: 12px;
    color: var(--subtitle-color);
  }
}
</style>
