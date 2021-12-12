# FEATURES

낸내는 '광고 없이 서비스를 제공한다'라는 목적을 위해 아래의 기법들을 이용했으며, 현재 (도메인을 제외하고)금전적인 비용이 발생되지 않습니다.

- **Hosting**: Netlify
- **Optimize Network Traffic**: Font Subset, Cache Storage API, jsDelivr CDN

## How does it work?

Netlify는 한 달 약 100 GB의 대역폭을 무료로 제공하고 있습니다. 낸내는 이를 기반으로, 빠르게 콘텐츠를 제공하기 위해 [jsDelivr Opensource CDN](https://www.jsdelivr.com/)을 함께 이용해 폰트 파일과 웹 페이지를 제공하고 있습니다.

다만 한글 폰트 파일은 완성형(2,350 글자) 기준으로 최소 1 MB 이상의 크기를 갖고 있어 이를 그대로 제공하기에는 몇 가지 문제점이 있습니다.

따라서 낸내는 각 폰트 파일에서 `다람쥐 헌 쳇바퀴에 타고파` 라는 [팬그램](https://ko.wikipedia.org/wiki/%ED%8C%AC%EA%B7%B8%EB%9E%A8)을 이용해 Font Subset을 구성하였습니다. 이 기법을 통해 트래픽은 약 7.2배, 그리고 Blocking Time은 약 5.7배 가량 기존보다 감소시킬 수 있었습니다.

**Font Subset을 사용하지 않은 경우 (Blocking Time)**

![Font Subset Blocking Time Image 1](https://user-images.githubusercontent.com/28308362/136233943-a91282ab-20c8-4894-8a11-119061de94f1.png)

**Font Subset을 사용한 경우 (Blocking Time)**

![Font Subset Blocking Time Image 2](https://user-images.githubusercontent.com/28308362/136234041-44f6ad82-7743-4f76-99c4-db1751b44611.png)

**Font Subset을 사용하지 않은 경우 (Network Traffic)**

![Font Subset Traffic Image 1](https://user-images.githubusercontent.com/28308362/136234177-bfe88215-423f-4210-8914-f88dbfcd94c5.png)

**Font Subset을 사용한 경우 (Network Traffic)**

![Font Subset Traffic Image 2](https://user-images.githubusercontent.com/28308362/136234198-89e0fc4b-d424-445e-a602-d1e7713cb3b2.png)

추가적으로 [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) 및 [Cache Storage API](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage)를 이용해 변경될 일이 없는 폰트 파일들을 캐싱하도록 구성했습니다.

**폰트 파일을 캐싱하지 않은 경우**

![Font Caching Image 1](https://i.imgur.com/cca5tak.png)

**폰트 파일을 캐싱한 경우**

![Font Caching Image 2](https://i.imgur.com/mrM7YiN.png)
