import createStore from "@/utils/createStore";

export interface EnvStore {
  release: {
    version: number;
    name: string;
  };
  type: string;
}

const initialStore: EnvStore = {
  release: {
    version: 0,
    name: "Test Name"
  },
  type: "alpha"
};

export const { subscribe, getSnapshot, setSnapshot } =
  createStore(initialStore);

export type Selector<T> = (store: EnvStore) => T;
