# 🔎 한국임상정보 검색창

_원티드 프리온보딩 인턴십 17팀 3주차 기업과제_

## 프로젝트 소개

### 내용

원티드 프리온보딩 프론트엔드 인턴십 3주차 과제 내용을 구현한 프로젝트 입니다.

### 목표

[한국임상정보](https://clinicaltrialskorea.com/)의 검색창 클론코딩

<br/>
<br/>

## 프로젝트 링크

[🔗Link](https://web-related-keyword-eu1k2lllc2s1v2.sel3.cloudtype.app/)

FE 배포는 `Cloud Type`을 이용하였습니다.

<br/>
<br/>

## 프로젝트 실행 가이드

- 실행을 위해 다음 Node version이 필요합니다.
  [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)

- 실행 방법 (2가지 중 택 1)
  > 1. 배포 링크를 통한 접속
  > 2. ZIP 파일 다운로드 및 압축 풀기 후 코드 에디터로 실행
  > 3. 아래 커멘드를 이용한 실행

```bash
$ git clone https://github.com/H0onnn/related-keyword.git
$ cd wanted-onboarding-03
$ npm install
$ npm run start
```

<br/>
<br/>

## 기술 스택

#### Development

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=Typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=for-the-badge&logo=nodedotjs">

#### Convention

![Static Badge](https://img.shields.io/badge/ESLINT%20-%20%23942894?style=for-the-badge&logo=ESLINT)
![Static Badge](https://img.shields.io/badge/PRETTIER%20-%20%23AE5E1A?style=for-the-badge&logo=PRETTIER)
<img src="https://img.shields.io/badge/husky-brown?style=for-the-badge&logo=npm">

#### Network & Route

![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black)
![Static Badge](https://img.shields.io/badge/REACT%20ROUTER%20-%20%23F4AAAA?style=for-the-badge&logo=REACT%20ROUTER)

### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

<br/>
<br/>

## 🚀 프로젝트 기술 구현에 대한 논의

#### [Assignment 1] 검색창 및 검색어 추천 기능 (검색값에 따른 API 호출로 추천 검색어 표시)

- 1.1) 검색창 컴포넌트 구조

  > 컴포넌트를 관심사 별로 분리 설계하여 각 컴포넌트는 독립적인 기능을 수행하도록 구현했습니다.

- 1.2) API 호출

  > API 호출시에는 Axios 라이브러리를 사용하였습니다.
  >
  > > client 로직을 class 문법으로 리팩토링 하여 메서드를 분리하고, private filed를 이용해 외부에서 instance에 접근할 수 없도록 했습니다.
  >
  > > httpClient 로직을 별도 파일로 작성하여 관리했습니다. axios의 interceptors를 이용해 response에 대한 error 처리를 수행했습니다.

- 1.3) 추천 검색어 표시

  > 사용자가 Input에 입력한 검색값에 따라 API를 호출하여 response data를 받아와, 이를 mapping 하는 방식을 사용했습니다.

- 1.4) 검색어가 없을 경우
  > 아무런 추천 검색어가 없을 경우에는 모달창에 '검색어 없음' 문구를 출력하였습니다.
  > ![image](https://github.com/H0onnn/related-keyword/assets/116232939/2e3e0e62-b187-467e-9783-a703cf47e50d)

<br/>

#### [Assignment 2] 로컬 캐싱 기능 (API 호출 결과에 대한 로컬 캐싱)

로컬 캐싱 기능을 구현하는 데에는 다양한 방법이 존재합니다. (storage, library, cache api, react-context, indexedDB 등) 저는 해당 방법 중 'local storage'를 이용한 캐싱을 선택했습니다.
제가 생각한 local storage를 사용했을 때의 장점은 다음과 같습니다.

1. 편리함 - 웹 스토리지의 경우 단순한 구조로 데이터를 불러오고 삭제할 수 있습니다. 그로인해 학습자의 입장에서 캐싱의 기본 개념을 빠르게 익히고 구현할 수 있습니다.
2. 호환성 - 대부분의 웹 브라우저는 웹 스토리지를 지원하기에 호환성 문제를 걱정하지 않아도 됩니다.
3. 직관성 - 웹 스토리지는 개발자가 브라우저의 개발자 도구에서 스토리지의 내용을 쉽게 확인하고 필요에 따라 수정할 수 있습니다. 따라서, 캐싱 데이터가 어떻게 저장되고 수정 및 삭제되는지 직관적인 확인이 가능합니다.

위와 같은 이유로 웹 스토리지로 로컬 캐싱의 기본 개념과 패턴을 빠르게 학습하여 직접 사용해보고자 해당 방법을 채택하였으며, 추후 cache API와 같은 방법을 통해 리팩토링을 예정하고 있습니다. 웹 스토리지 중 탭을 닫거나 브라우저를 종료했을 때 데이터가 유실되지 않도록 하기 위해 'local storage'를 선택했습니다.

- 2.1) 캐싱 로직 구현

  > 커스텀 훅의 경우 리액트의 컴포넌트 내에서만 사용되어야 하는 규칙이 따르기 때문에, API 호출 등에서 사용되는 caching 로직은 util 함수로 작성하는것이 더 적합하다고 판단하여, localCache.ts util 함수를 만들어 사용했습니다. 사용자가 검색어를 입력하면 데이터 조회 로직을 수행하여 storage 내의 key 값을 확인하고, 캐시에 데이터가 있으면 API를 호출하지 않고 해당 값을 사용하도록 했습니다. 만약 캐시에 데이터가 없다면, API 호출을 통해 데이터를 가져오게 됩니다. 이 때 API 호출 빈도 확인을 위해 console.info('calling api')를 추가했습니다.

- 2.2) expire time 구현
  > 캐싱 데이터의 유효시간을 고려하여 expire time을 적용했습니다. writeToCache 함수 실행시 storage value에 현재 시간으로 timestamp 속성을 추가하여 구문으로 데이터의 유효시간을 설정합니다. 그 후 readFromCache 함수 내에서 storage 값을 가져올 시 조건문을 통해 유효시간을 검사하게 됩니다. 만약, 항목의 유효시간이 지날 경우 localstorage.removeItem을 이용하여 캐싱 데이터를 삭제하고 빈 배열을 반환합니다.

```ts
// localCache.ts

import { KeywordDataTypes } from '../constants/types';

const localCache = (() => {
  const writeToCache = (key: string, data: KeywordDataTypes[]) => {
    const storageValue = {
      data,
      timestamp: new Date().getTime(),
    };

    localStorage.setItem(key, JSON.stringify(storageValue));
  };

  const readFromCache = (key: string) => {
    const storageValueString = localStorage.getItem(key);
    if (!storageValueString) return [];

    const storageValue = JSON.parse(storageValueString);

    if (new Date().getTime() - storageValue.timestamp > EXPIRE_TIME) {
      localStorage.removeItem(key);
      return [];
    }

    return storageValue.data;
  };

  return {
    writeToCache,
    readFromCache,
  };
})();

export default localCache;

const EXPIRE_TIME = 5 * 60 * 1000; // 5분

// data fetching logic ..

const fetchKeywordData = useCallback(async () => {
  if (debouncedValue && debouncedValue.length) {
    setIsLoading(true);
    let data = useCache ? localCache.readFromCache(debouncedValue) : null;

    if (!data || !data.length) {
      console.info('calling api');
      data = await getKeywordData(debouncedValue, useCache);
    }

    setKeywordData(data);
    setIsLoading(false);
  }
}, [debouncedValue, useCache]);
```

<br/>

#### [Assignment 3] API 호출 최적화 (매 입력마다 API를 호출하지 않도록 제한)

Input에 사용자가 검색어를 입력할 때 매 입력시 마다 API가 호출되는 문제가 있었습니다. 예를 들어, '암' 키워드를 검색할 경우 'ㅇ + ㅏ + ㅁ' 이런식으로 하나의 키워드에 총 3번의 API를 호출했습니다. 이는 비용상으로 매우 비효율적이며, 서버에 부하를 줄 위험이 있습니다. 이를 제한하기 위해 생각해낸 방법으로는 '디바운싱, 쓰로틀링, 캐싱'이 있었고, 그 중 디바운스 기법을 채택했습니다.

디바운스 기법은 연속된 이벤트를 그룹화하여 마지막 이벤트가 발생한 후 일정 시간이 경과했을 때 처리하는 방법입니다. 빠르게 반복되는 이벤트에 대한 처리를 최적화하여 성능을 향상시키고 비용을 절감하는데 큰 도움을 주는 기법으로 이는 사용자가 Input에 문자를 입력할 때 마다 API가 호출되는 것을 방지하는데 있어 가장 적합한 방법이라고 생각했습니다.

- 3.1) 디바운싱 로직 구현
  > 디바운싱을 처리하는 로직은 리액트 컴포넌트 내에서만 사용되며 컴포넌트의 로직을 단순화하고, 추후 여러 곳에서 재사용될 가능성을 염려하여 useDebounce라는 커스텀 훅을 만들어 작성하였습니다. 작동 방식은 다음과 같습니다. useState의 초기값으로 value (사용자의 입력값) 을 받습니다. useEffect를 이용하여 value의 값이 변경될 때 디바운싱 로직이 실행되도록 하고, setTimeout api를 통해 delay 시간이 지난 후 debouncedValue를 최신의 value 값으로 설정합니다.

```tsx
// useDebounce.ts

import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

// Modal.tsx

import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
// 이 외 import 구문

const Modal = () => {
    const debouncedValue = useDebounce(query, DELAY_TIME); // useDebounce에 query(입력값) 와 delay time 전달

    const fetchKeywordData = useCallback(async () => {
    if (debouncedValue && debouncedValue.length) {
      setIsLoading(true);
      let data = useCache ? localCache.readFromCache(debouncedValue) : null;

      if (!data || !data.length) {
        console.info('calling api');
        data = await getKeywordData(debouncedValue, useCache);
        // 캐싱된 데이터가 없을 시 api 호출 함수에 debouncedValue 전달
      }

      setKeywordData(data);
      setIsLoading(false);
    }
  }, [debouncedValue, useCache]);

// 이 외 생략
```

<br/>

#### [Assignment 4] 키보드 접근성 (키보드로 추천 검색어에 접근 가능하도록 구현)

사용자에게 편리한 UX 경험을 제공하기 위해 키보드 접근성을 고려하여 추천 검색어 모달창에 렌더링 되는 Item에 키보드 방향키로 접근할 수 있도록 구현했습니다. 입력된 키보드의 키 값을 바탕으로 이벤트리스너를 추가하는 방식, keyup & keydown 이벤트를 사용하는 방식, css를 이용한 방식 등 다양한 방식에 대해 논의하였고, 제가 최종적으로 선택한 방식은 'keyup & keydown 이벤트를 사용하는 방식' 입니다.

keyup & keydown 이벤트를 사용하는 방식은 모든 키 입력에 대한 반응을 제어할 수 있기 때문에 해당 기능에 적합하다고 판단했습니다.

- 4.1) keypress 로직 구현 방식

  > 해당 로직은 keypress에 대한 로직을 처리하는 커스텀 훅을 작성해 관리했습니다. state를 통해 위, 아래 키가 눌렸을 때 상태를 감지하여 addEventListner를 추가하고 키가 떼어졌을 때 이벤트를 삭제하는 방식으로 구현했습니다. 포커싱 되는 item의 index 값을 focusIdx 상태로 관리하여 keypress 시 focusIdx +1, -1 로직을 통해 포커싱이 변환되도록 구현했습니다.

- 4.2) 포커싱 이탈 이슈

  > focusIdx에 대해 단순히 +, - 만 처리할 경우 반환되는 item의 length 보다 focusIdx가 크거나 작아져 포커싱이 제대로 이루어지지 않는 문제를 해결하기 위해 조건문을 사용하여 맨 첫번째 요소 혹은 맨 마지막 요소에서 keypress 되었을 경우의 예외처리를 해주었으며, 이로 인해 포커싱이 모달창 안에서 순회하도록 구현했습니다.

- 4.3) enter keypress

  > 사용자가 Enter 키를 입력했을 경우 포커싱된 item의 sickNm을 input의 value로 설정하여 해당 값으로 검색되도록 했습니다.

- 4.4) 키보드 스크롤링
  > focusIdx로 포커싱만 처리해줄 경우 만약 모달창 보다 출력되는 item의 갯수가 많아지면 css 속성으로 인해 스크롤바가 생기게 되는데, 이 때 스크롤이 이동하지 않는 문제가 발생했습니다. 이를 해결하기 위해 모달창과 각각의 item에 React ref, forwardRef를 사용하여 요소들의 위치를 참조, 위치값에 따라 스크롤링이 되도록 구현했습니다.

```tsx
// useKeyPress.ts

import { useState, useEffect } from 'react';

const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    };

    const upHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return keyPressed;
};

export default useKeyPress;

// Modal.tsx

useEffect(() => {
  if (keywordData.length && downPressed) {
    const nextItem = (currentItem + 1) % keywordData.length;
    if (nextItem !== currentItem) {
      setCurrentItem(nextItem);
    }
  }
}, [downPressed]);

useEffect(() => {
  if (keywordData.length && upPressed) {
    const prevItem = (currentItem - 1 + keywordData.length) % keywordData.length;
    if (prevItem !== currentItem) {
      setCurrentItem(prevItem);
    }
  }
}, [upPressed]);

useEffect(() => {
  if (keywordData.length && enterPressed) {
    const selectedKeyword = keywordData[currentItem]?.sickNm;

    if (selectedKeyword) setQuery(selectedKeyword);
    else setQuery(query);
  }
}, [enterPressed]);

useEffect(() => {
  if (keywordData.length && (downPressed || upPressed)) {
    adjustScroll();
  }
}, [downPressed, upPressed, keywordData, currentItem]);
```

![키보딩](https://github.com/H0onnn/related-keyword/assets/116232939/66e3de90-fb50-4a1f-864f-ffba84ab7773)

<br/>

#### [Assignment 5] DB 서버 백엔드 설정

이번 과제에서는 간단한 DB/백엔드 프로젝트를 제공하고, 이를 이용하여 API 호출을 통한 response data를 받아와 클라이언트 단에서 처리하는 방식이었습니다. DB 이용에 대해 저희 팀원들은 두 가지 방식을 생각했습니다.

1. 코드 에디터를 2개 실행하여 각각 FE, BE 파일을 열어 가동한다.
2. FE 프로젝트 내부에 DB json 파일을 저장한 뒤, json-server와 concurrently 라이브러리를 적용하여 FE가 가동되었을 때 간이 BE 서버가 동시에 가동되도록 한다.

코드 에디터 하나만으로 FE와 BE 서버를 동시에 실행시킬 수 있다는 장점이 있어, 개발 초기 저희는 2번의 방식을 채택했습니다.

- 5.1) 배포 환경에서 json-server가 작동하지 않는 이슈
  > FE 프로젝트의 로컬 환경에서 json-server는 정상적으로 작동하였으나, 배포 환경에서는 API 호출시 'Network Error'를 반환하는 문제가 발생했습니다. 원인을 찾아본 결과 json-server는 프로덕션 혹은 클라우드 환경에서의 실행을 목적으로 설계되어 FE 프로젝트 내부에서 json-server 라이브러리만으로 배포는 불가능했습니다. 이에 팀원 한 분이 BE 서버를 호스팅 플랫폼을 통해 배포하여 팀원 전체가 로컬 환경, 배포 환경 모두에서 API 요청을 정상적으로 가능하도록 했습니다.

다양한 호스팅 플랫폼 중 간단한 수준의 BE 서버를 json-server의 기능을 모방한 서버리스 함수를 사용해 배포할 수 있는 'Vercel'을 이용했습니다.

[백엔드 서버 배포 과정](https://www.notion.so/React-js-Typescript-Vercel-API-64e56592ecd94169b08fa5f1425e78db)

## 아키텍쳐

### 디렉토리 구조

```bash
wanted-onboarding-03
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── images
│   │   └── search.png
│   └── index.html
├── src
│   ├── App.tsx
│   ├── api
│   │   ├── axios.ts
│   │   └── data.ts
│   ├── components
│   │   ├── UI
│   │   │   └── LoadingUI.tsx
│   │   ├── input
│   │   │   ├── Input.tsx
│   │   │   ├── InputButton.tsx
│   │   │   ├── InputImage.tsx
│   │   │   └── InputTextField.tsx
│   │   └── modal
│   │       ├── KeywordItem.tsx
│   │       ├── KeywordList.tsx
│   │       └── Modal.tsx
│   ├── constants
│   │   ├── colors.ts
│   │   └── types.ts
│   ├── context
│   │   └── context.tsx
│   ├── hooks
│   │   ├── useDebounce.ts
│   │   └── useKeyPress.ts
│   ├── index.css
│   ├── index.tsx
│   ├── layout
│   │   └── PageLayout.tsx
│   ├── pages
│   │   └── MainPage.tsx
│   ├── routes.tsx
│   └── utils
│       └── localCache.ts
├── tsconfig.json
└── webpack.config.js
```
