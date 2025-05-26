import { Draft, produce } from "immer";
import { useSyncExternalStore } from "react";
import { useSyncExternalStoreWithSelector } from "use-sync-external-store/with-selector";

type SetSnapshot<T> = (setter: (draft: Draft<T>) => void) => void;

type Listener<T> = (prev: T, next: T) => unknown;

type Selector<T, U> = (store: T) => U;

type FunctionMap = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (...args: any[]) => unknown;
};

type Changers<T, U> = (setSnapshot: SetSnapshot<T>) => U;

function createStore<T, U extends FunctionMap>(
  initialStore: T,
  changers: Changers<T, U>
) {
  let store: T = initialStore;
  const listeners = new Set<Listener<T>>();

  function getSnapshot() {
    return store;
  }

  function setSnapshot(setter: (draft: Draft<T>) => void) {
    const prevStore = store;
    store = produce(store, setter);
    listeners.forEach((listener) => listener(prevStore, store));
  }

  function subscribe(listener: Listener<T>) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }

  const changeFunction = changers(setSnapshot);

  function useStore() {
    const value = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
    return value;
  }

  function useStoreWithSelector<V = T>(
    selector: Selector<T, V> = (store) => store as unknown as V,
    isEqual: (a: V, b: V) => boolean = (a, b) => a === b
  ) {
    const value = useSyncExternalStoreWithSelector(
      subscribe,
      getSnapshot,
      getSnapshot,
      selector,
      isEqual
    );
    return value;
  }

  return {
    getSnapshot,
    setSnapshot,
    subscribe,
    useStore,
    useStoreWithSelector,
    ...changeFunction
  };
}

export default createStore;
