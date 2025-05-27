# 라이브러리 없이 React 전역 상태 구현해보기

`useSyncExternalStore` Hook을 사용한 전역 상태 라이브러리 구현 테스트

[블로그 글](https://blog.yunji.kim/react_global_state_without_library)

## 결과물

`createStoreWithChanger.ts`

- 전역 상태 선언 및 변경 기능
- 전역 상태 변경 시 이전, 이후 상태를 구독 기능
- `immer`를 통한 불변성 관리
- `useSyncExternalStore`를 사용한 `useStore` Hook으로 상태 참조
- `useSyncExternalStoreWithSelector`를 사용한 `useStoreWithSelector` Hook으로 Selector 를 통한 상태 참조

## 사용법

`createStore`함수로 초기 상태 및 `changer`(상태 변경 함수) 선언

```ts
// src/store/objectStoreWithChanger.ts
import createStore from "@/utils/createStoreWithChanger";

export interface EnvStore {
  release: {
    version: number;
    name: string;
  };
  type: "alpha" | "beta";
}

const initialStore: EnvStore = {
  release: {
    version: 0,
    name: "Test Name"
  },
  type: "alpha"
};

export const {
  getSnapshot, // 현재 상태 반환 함수
  setSnapshot, // 상태 변경 힘수
  subscribe, // 상태 구독 함수
  useStore, // 상태 참조 Hook
  useStoreWithSelector, // Selector 활용 상태 참조 Hook
  increaseVersion, // 선언한 changer
  decreaseVersion, // 선언한 changer
  setType // 선언한 changer
} = createStore(initialStore, (setSnapshot) => ({
  increaseVersion: () => {
    setSnapshot((draft) => {
      draft.release.version += 1;
    });
  },
  decreaseVersion: () => {
    setSnapshot((draft) => {
      draft.release.version -= 1;
    });
  },
  setType: (next: EnvStore["type"]) => {
    setSnapshot((draft) => {
      draft.type = next;
    });
  }
}));
```

참조 및 구독

```ts
// anywhere
const store = getSnapshot();
const unsubscribe = subscribe((prev, next) => {
  // process
});

// in component
const store = useStore();
const type = useStoreWithSelector((store) => store.type);
const { version, type } = useStoreWithSelector(
  (store) => ({
    version: store.release.version,
    type: store.type
  }),
  (a, b) => a.type === b.type && a.version === b.version;
);
```

업데이트

```ts
// call setSnapshot directly
setSnapshot((draft) => {
  // process
});

// call changer function
increaseVersion();
```

## 구현 및 구체화 순서

`counterStore.ts`

- `useCounterStore.tsx`, `components/counter/*`
- 간단한 전역 숫자

---

`recordStore.ts`

- `useRecordStore.tsx`, `useRecordTypeStore`, `components/record/*`
- `key`, `value` 형식으로 전역 상태 접근

---

`createStore.ts` + `todoStore.ts`

- `useTodoList.tsx`, `components/todo/*`
- 전역 상태 생성 함수 모듈화
- 상태 변경 함수 별도 선언 테스트

---

`createStore.ts` + `envStore.ts`

- `useEnvStore.tsx`, `components/env/*`
- `useSyncExternalStoreWithSelector` Hook을 사용한 Selector 적용

---

`createStoreWithImmer.ts` + `envStoreWithImmer.ts`

- `useEnvStoreWithImmer.tsx`, `components/envImmer/*`
- 상태 변경 함수 `setSnapshot`에 `immer` 라이브러리 적용

---

`createStoreWithChanger.ts` + `envStoreWithChanger.ts`

- `components/envChanger/*`
- `subscribe` 함수에 이전 값, 현재 값 참조 기능 추가
- `useStore`, `useStoreWithSelector` Hook 내장
- 상태 변경 함수 `changer`를 전역 상태 생성 시에 선언할 수 있도록 변경

## 참고

- [useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)
- [useSyncExternalStoreWithSelector](https://www.npmjs.com/package/use-sync-external-store)
- [zustand/src/traditional.ts](https://github.com/pmndrs/zustand/blob/main/src/traditional.ts)
