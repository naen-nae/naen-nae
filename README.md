# 낸내

[![Deploy](https://github.com/naen-nae/naen-nae/actions/workflows/deploy.yml/badge.svg)](https://github.com/naen-nae/naen-nae/actions/workflows/deploy.yml)

[![GitHub Stars](https://img.shields.io/github/stars/naen-nae/naen-nae)](https://github.com/naen-nae/naen-nae/stargazers) [![GitHub Forks](https://img.shields.io/github/forks/naen-nae/naen-nae)](https://github.com/naen-nae/naen-nae/network/members)

<p align="center">
  <b>라이선스 걱정 없는 한글 폰트 '낸내'</b>
</p>

- [낸내 바로가기](https://naen-nae.shj.rip/)
- [폰트 제안하기 (구글 폼)](https://forms.gle/cmbzX8JmazrkDUex7)
- [폰트 제안하기 (깃헙 이슈)](https://github.com/naen-nae/naen-nae/issues)

## 🖐 낸내

안녕하세요.

**낸내** 는 상업적으로 이용할 수 있는 무료 한글 폰트를 모아 많은 사람들에게, 그리고 광고 없이 소개하기 위해 시작했습니다.

<p align="center">
  <img src="./docs/logo-256x256_white.png">
</p>

오픈 소스로 관리되며, 웹에서 자유롭게 사용할 수 있도록 재배포가 가능한 폰트만을 소개하고 있습니다.

낸내에서 소개되는 모든 폰트의 지적재산권을 포함한 모든 권리는 각 폰트 제작자/제작사에 있으며, 낸내는 오로지 한글 폰트를 소개하고 이를 웹에서 바로 사용할 수 있도록 제공하고 있습니다.

마지막으로 낸내는 폰트 제작자/제작사와 관련이 없는 단체입니다. 따라서 낸내는 폰트 소프트웨어 사용과 취급으로 인해 발생되는 일에 대해 책임 및 의무를 가지지 않습니다.

감사합니다.

## 💡 왜 만들게 되었나요?

낸내는 '눈누'라는 서비스를 타깃으로 만들게 되었습니다.

눈누는 상업적인 용도로 사용이 가능한 무료 한글 폰트를 소개하는 웹 사이트입니다.

처음에는 광고도 없었고, 많은 폰트를 소개하고 있어서 자주 사용하는 서비스였습니다.

그러나 언젠가부터 광고가 눈에 띄게 증가하게 되었고, 결국 사용자의 동작을 방해하는 광고마저 추가된 것을 보고 '낸내'를 만들고자 생각했습니다.

쓸 데 없고, 불편하기만 한 광고 따위는 없는 무료 한글 폰트 소개 서비스를 만들고자 합니다.

## 🙋‍♀️ 누가 사용하나요?

라이선스 걱정 없이 한글 폰트를 사용하고자 하는 모든 사람들이 사용할 수 있습니다.

## ✨ 폰트 제안하기

누구나 낸내에 폰트를 제안할 수 있습니다.

[구글 폼](https://forms.gle/cmbzX8JmazrkDUex7)을 이용해 새로운 폰트를 제안해주세요!

한글 지원 여부, 재배포 가능 여부, 기타 라이선스 체크 후 가능한 빠른 시일 내 추가하도록 하겠습니다.

감사합니다. 😊

## 📑 컨트리뷰트 가이드라인

'낸내' 프로젝트에 기여해주셔서 감사합니다!

### 설치하기

```sh
# 시작하기 전, 먼저 프로젝트를 자신의 리포지토리에 포크해주세요.

git clone https://github.com/<GitHub User name>/naen-nae
cd naen-nae

yarn # 디펜던시 설치
yarn pre-gen # 앱 구동에 있어 필요한 파일들 생성
yarn dev # 앱 구동 (http://localhost:3000/)
```

### `yarn pre-gen`

`yarn pre-gen` 명령으로 `font-gen` 및 `subset-font-gen` 스크립트가 실행됩니다. 각 스크립트에 대한 자세한 설명은 바로 아래에서 이어집니다.

### `yarn font-gen`

`yarn font-gen` 명령으로 [폰트 관련 파일 생성 스크립트](./scripts/fontGen/index.js)가 실행되며, 다음의 파일이 생성됩니다.

- `/public/fonts.json`: 폰트와 관련된 정보가 담긴 JSON 파일
- `/public/css/<Font name>.css`: 폰트별로 분리된 CSS 파일 (`font-face`)
- `/public/subset-css/<Font name>.css`: 폰트(Subset)별로 분리된 CSS 파일

앱 내에서는 `fonts.json` 파일이 사용됩니다.

`<font name>.css` 파일은 아래와 같이 실제로 폰트를 사용하기 위해 생성되는 파일이에요.

```html
<link href="https://cdn.jsdelivr.net/gh/naen-nae/naen-nae@gh-pages/css/Nanum Gothic.css" rel="stylesheet">
```

이 파일들은 `fonts.yml`에 명시된 내용을 바탕으로 생성됩니다.

### `yarn subset-font-gen`

빠른 웹 페이지 로드를 위해, 초기 화면(Home)은 아래의 팬그램 글자만을 보여주도록 하고 있으며,

```
다람쥐 헌 쳇바퀴에 타고파
```

`다람쥐 헌 쳇바퀴에 타고파`라는 글자만을 폰트 파일로 생성하여 Home 페이지에서 사용하도록 하고 있습니다.

이를 서브셋(Subset)이라 하며, 기존보다 수십 배 이상 빠른 초기 화면 로드를 가능하게 합니다.

서브셋 폰트 파일은 `yarn subset-font-gen` 명령으로 생성이 가능하며, GitHub Actions 이슈로 인해 현재는 직접 생성 후 Push하도록 하고 있습니다.

명령의 결과로 `/public/subset-fonts/` 디렉터리 아래에 서브셋 폰트 파일과 관련된 디렉터리 및 서브셋 폰트 파일이 생성됩니다.

### [`fonts.yml`](./fonts.yml)

'낸내'는 `fonts.yml` 파일을 기반으로 폰트를 생성 및 관리합니다.

```yml
fonts:
  - author: <폰트 제작자/제작사>
    name: <폰트 이름>
    files:
      - <폰트 파일 경로 1> # '/fonts' 디렉터리를 베이스로 합니다.
      - <폰트 파일 경로 2> # 같은 Font Family인 경우, 여러 폰트를 등록할 수 있습니다.
    fontWeights:
      - <폰트 굵기 1> # 100~900 중에서 설정합니다.
      - <폰트 굵기 2> # 각 파일에 대한 굵기를 명시합니다.
    fontFamily: <Font Family 이름>
    licenseSummary: # 라이선스 요약
      print: true # true: 허용, false: 비허용
      website: true
      video: true
      paper: true
      embeding: true
      bici: true
      ofl: true
    license: |
      <라이선스 전문>

  - author: # ...
```

'라이선스 요약'에 대한 내용은 다음과 같습니다.

- 인쇄: 브로슈어, 포스터, 책, 잡지 및 출판용 인쇄물 등
- 웹사이트: 웹페이지, 광고 배너, 메일, E-브로슈어 등
- 영상: 영상물 자막, 영화 오프닝/엔딩 크레딧, UCC 등
- 포장지: 판매용 상품의 패키지
- 임베딩: 웹사이트 및 프로그램 서버 내 폰트 탑재, E-book 제작
- BI/CI: 회사명, 브랜드명, 상품명, 로고, 마크, 슬로건, 캐치프레이즈
- OFL: 폰트 파일의 수정/ 복제/ 배포 가능. 단, 폰트 파일의 유료 판매는 금지

## 📜 라이선스

낸내에서 소개되는 모든 폰트의 지적재산권을 포함한 모든 권리는 각 폰트 제작자/제작사에 있으며, 낸내는 오로지 한글 폰트를 소개하고 이를 웹에서 바로 사용할 수 있도록 제공하고 있습니다.

낸내를 구성하는 모든 코드는 MIT 라이선스를 따르고 있습니다.

[낸내 라이선스 전문](./LICENSE)
