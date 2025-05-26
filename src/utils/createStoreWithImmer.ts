import { Draft, produce } from "immer";

function createStore<T>(initialStore: T) {
  let store: T = initialStore;
  const listeners = new Set<() => void>();

  function getSnapshot() {
    return store;
  }

  function setSnapshot(setter: (draft: Draft<T>) => void) {
    store = produce(store, setter);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }

  return {
    getSnapshot,
    setSnapshot,
    subscribe
  };
}

export default createStore;
