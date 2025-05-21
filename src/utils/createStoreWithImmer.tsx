import { Draft, produce } from "immer";

function createStore<T>(initialStore: T) {
  let store: T = initialStore;
  let listeners: Array<() => void> = [];

  function getSnapshot() {
    return store;
  }

  function setSnapshot(setter: (draft: Draft<T>) => void) {
    store = produce(store, setter);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener: () => void) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((fn) => fn !== listener);
    };
  }

  return {
    getSnapshot,
    setSnapshot,
    subscribe
  };
}

export default createStore;
