import { Draft, produce } from "immer";

type SetSnapshot<T> = (setter: (draft: Draft<T>) => void) => void;

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

  const changeFunction = changers(setSnapshot);

  return {
    getSnapshot,
    setSnapshot,
    subscribe,
    ...changeFunction
  };
}

export default createStore;
