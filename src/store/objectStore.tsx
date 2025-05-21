import createStore from "@/utils/createStore";

export interface ObjectStore {
  test: {
    version: number;
    name: string;
  };
  type: string;
}

export const initialStore: ObjectStore = {
  test: {
    version: 0,
    name: "Test Name"
  },
  type: "alpha"
};

export const { subscribe, getSnapshot, setSnapshot } =
  createStore(initialStore);

export type Selector<T> = (store: ObjectStore) => T;
