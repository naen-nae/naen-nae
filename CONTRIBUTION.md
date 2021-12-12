# CONTRIBUTION

'낸내' 프로젝트에 기여해주셔서 감사합니다.

## 설치하기

```sh
# 시작하기 전, 먼저 프로젝트를 자신의 리포지토리에 포크해주세요.

git clone https://github.com/<GitHub User name>/naen-nae
cd naen-nae

yarn # 디펜던시 설치
yarn dev # 앱 구동 (http://localhost:3000/)
yarn build # 앱 빌드
```

낸내는 [Vite-SSG](https://github.com/antfu/vite-ssg)를 이용해 앱을 빌드하고 있으며, 최신 버전의 NodeJS를 사용해주세요.

## 프로젝트 구조

다음과 같이 프로젝트를 관리하고 있습니다.

- [scripts/verifyCommit.js](./scripts/verifyCommit.js): Git Hook을 이용해 커밋 시 커밋 메시지를 확인하는 용도의 스크립트
- [src/](./src)
  - [components/](./src/components): 컴포넌트 소스 코드 디렉터리
  - [composables/](./src/composables): [Vue 3 Composables](https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref) 소스 코드 디렉터리
  - [pages/](./src/pages): 페이지 소스 코드 디렉터리
  - [store/](./src/store): [Vuex](https://next.vuex.vuejs.org/) 소스 코드 디렉터리
  - [stories/](./src/stories): [Storybook](https://storybook.js.org/) 소스 코드 디렉터리
  - [styles/](./src/styles): 전역적으로 적용되는 스타일([Sass](https://sass-lang.com/)) 소스 코드
- [vite.config.js](./vite.config.js): [Vite](https://vitejs.dev/) 번들러 설정 스크립트

## 폰트 파일

폰트 파일은 [fonts 리포지터리](https://github.com/naen-nae/fonts)로 분리해 관리하고 있습니다.
