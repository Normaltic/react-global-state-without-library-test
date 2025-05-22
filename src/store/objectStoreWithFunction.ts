import createStore from "@/utils/createStoreWithFunction";

export interface ObjectStore {
  test: {
    version: number;
    name: string;
  };
  type: string;
}

const initialStore: ObjectStore = {
  test: {
    version: 0,
    name: "Test Name"
  },
  type: "alpha"
};

export const { getSnapshot, setSnapshot, subscribe, increaseVersion } =
  createStore(initialStore, (setter) => ({
    increaseVersion: () => {
      setter((draft) => {
        draft.test.version += 1;
      });
    },
    setTo: (next: number) => {
      setter((draft) => {
        draft.test.version = next;
      });
    }
  }));
