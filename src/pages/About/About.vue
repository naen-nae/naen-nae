<template>
  <article class="about">
    <section class="about__title">
      <p class="typo-headline">낸내</p>
      <p class="about__title--contents typo-subtitle">
        낸내는 상업적으로 이용할 수 있는 무료 한글 폰트를 모아 많은 사람들에게,
        그리고 광고 없이 소개하기 위해 시작했습니다.
        <br />
        <br />
        오픈 소스로 관리되며, 광고 및 후원은 받지 않고 운영됩니다.
        <br />
        <br />
        낸내에서 소개되는 모든 폰트의 지적재산권은 각 폰트 제작자/제작사에
        있으며, 낸내는 오로지 한글 폰트를 소개하고 이를 웹에서 바로 사용할 수
        있도록 제공합니다.
        <br />
        <br />
        낸내는 폰트 제작자/제작사와 관련이 없는 단체입니다. 따라서 낸내는 폰트
        소프트웨어 사용과 취급으로 발생하는 일에 대해 책임 및 의무를 가지지
        않습니다.
      </p>
    </section>

    <section class="about__contact">
      <p class="typo-title">문의</p>
      <a class="typo-link" href="mailto:to@shj.rip">to@shj.rip</a>
    </section>

    <section class="about__github">
      <p class="typo-title">깃허브</p>
      <a
        class="typo-link"
        target="_blank"
        href="https://github.com/naen-nae/naen-nae"
      >
        https://github.com/naen-nae/naen-nae
      </a>
    </section>
  </article>
</template>

<style lang="scss" scoped>
.about {
  text-align: center;

  & > * {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }

    & > * {
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__title--contents {
    text-align: center;
    line-height: 1.3;
  }
}
</style>
