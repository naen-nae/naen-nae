# CONTRIBUTION

'낸내' 프로젝트에 기여해주셔서 감사합니다.

## 설치하기

```sh
# 시작하기 전, 먼저 프로젝트를 자신의 리포지토리에 포크해주세요.

git clone https://github.com/<GitHub User name>/naen-nae
cd naen-nae

yarn # 디펜던시 설치
yarn dev # 앱 구동 (http://localhost:3000/)
```

## 프로젝트 구조

다음과 같이 프로젝트를 관리하고 있습니다.

- [scripts/verifyCommit.js](./scripts/verifyCommit.js): Git Hook을 이용해 커밋 시 커밋 메시지를 확인하는 용도의 스크립트
- [src/](./src)
  - [components/](./src/components): 특정 Page에 종속적이지 않은 컴포넌트 소스 코드 디렉터리
  - [composables/](./src/composables): [Vue 3 Composables](https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref) 소스 코드 디렉터리
  - [pages/](./src/pages): 방문할 수 있는 페이지 및 페이지에 종속적인 컴포넌트에 대한 소스 코드 디렉터리
  - [router/](./src/router): [Vue-router](https://next.router.vuejs.org/) 소스 코드 디렉터리
  - [share/](./src/share): 프로젝트 내에서 전역적으로 사용되는 소스 코드 디렉터리
  - [store/](./src/store): [Vuex](https://next.vuex.vuejs.org/) 소스 코드 디렉터리
  - [stories/](./src/stories): [Storybook](https://storybook.js.org/) 소스 코드 디렉터리
  - [styles/](./src/styles): 전역적으로 적용되는 스타일([Sass](https://sass-lang.com/)) 소스 코드
- [vite.config.js](./vite.config.js): [Vite](https://vitejs.dev/) 번들러 설정 스크립트

## 폰트 파일

폰트 파일은 [fonts 리포지터리](https://github.com/naen-nae/fonts)로 분리해 관리하고 있습니다.
