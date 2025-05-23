function createStore<T>(initialStore: T) {
  let store: T = initialStore;
  let listeners: Array<() => void> = [];

  function getSnapshot() {
    return store;
  }

  function setSnapshot<U extends keyof T>(value: Pick<T, U>) {
    store = { ...store, ...value };
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
