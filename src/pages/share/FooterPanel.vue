<template>
  <footer>
    <div class="footer__leftside">
      <app-title />
      <p class="footer__leftside--contents typo-text">
        낸내는 한글 폰트를 웹에서 바로 사용할 수 있도록 소개하며, 모든 폰트의
        저작권은 각 폰트의 제작자/제작사에 있습니다.<br />폰트 사용 시 라이센스
        문의는 제작자/제작사에 문의해주세요.
      </p>
    </div>
    <div class="footer__rightside">
      <router-link class="typo-link" to="/">모든 폰트</router-link>
      <router-link class="typo-link" to="/about">소개</router-link>
      <a
        class="typo-link"
        target="_blank"
        href="https://forms.gle/cmbzX8JmazrkDUex7"
      >
        폰트 제보하기
      </a>
      <a
        class="typo-link"
        target="_blank"
        href="https://github.com/naen-nae/naen-nae/"
      >
        GitHub
      </a>
    </div>
  </footer>
</template>

<script setup>
import AppTitle from '../../components/AppTitle.vue';
</script>

<style lang="scss" scoped>
@import '../../styles/display.scss';

footer {
  display: flex;
  width: 100%;
  padding: 12px;
  border-top: 1px solid var(--border-color);

  .footer {
    &__leftside {
      flex: 8;

      &--contents {
        margin-top: 12px;
        line-height: 1.4;
        word-break: keep-all;
      }
    }

    &__rightside {
      flex: 4;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;

      * {
        margin-bottom: 6px;
      }
    }
  }

  @include mobile {
    display: block;

    .footer__rightside {
      align-items: flex-start;
      margin-top: 12px;
    }
  }
}
</style>
