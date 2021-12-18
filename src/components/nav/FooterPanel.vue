<template>
  <footer class="block md:flex p-2">
    <section class="flex-[8]">
      <AppTitle />
      <p class="typo-text mt-12px leading-normal break-keep">
        낸내는 한글 폰트를 웹에서 바로 사용할 수 있도록 소개하며, 모든 폰트의
        저작권은 각 폰트의 제작자/제작사에게 있습니다.<br />폰트 사용 시
        라이센스에 대한 자세한 문의는 제작자/제작사에 요청해주세요.
      </p>
    </section>
    <section
      class="justify-start flex flex-[4] flex-col items-start md:items-end children:mb-[6px] <md:mt-[12px]"
    >
      <router-link class="typo-link" to="/">모든 폰트</router-link>
      <router-link class="typo-link" to="/about">소개</router-link>
      <a
        class="typo-link"
        target="_blank"
        href="https://forms.gle/cmbzX8JmazrkDUex7"
        >폰트 제보하기</a
      >
      <a
        class="typo-link"
        target="_blank"
        href="https://github.com/naen-nae/naen-nae"
        >GitHub</a
      >
    </section>
  </footer>
</template>

<script lang="ts" setup>
import AppTitle from './AppTitle.vue';
</script>
