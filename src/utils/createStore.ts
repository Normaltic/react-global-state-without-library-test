function createStore<T>(initialStore: T) {
  let store: T = initialStore;
  const listeners = new Set<() => void>();

  function getSnapshot() {
    return store;
  }

  function setSnapshot<U extends keyof T>(value: Pick<T, U>) {
    store = { ...store, ...value };
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
