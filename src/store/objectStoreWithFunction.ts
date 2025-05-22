import createStore from "@/utils/createStoreWithFunction";

export interface ObjectStore {
  test: {
    version: number;
    name: string;
  };
  type: "alpha" | "beta";
}

const initialStore: ObjectStore = {
  test: {
    version: 0,
    name: "Test Name"
  },
  type: "alpha"
};

export const {
  getSnapshot,
  setSnapshot,
  subscribe,
  useStore,
  useStoreWithSelector,
  increaseVersion,
  decreaseVersion,
  setType
} = createStore(initialStore, (setter) => ({
  increaseVersion: () => {
    setter((draft) => {
      draft.test.version += 1;
    });
  },
  decreaseVersion: () => {
    setter((draft) => {
      draft.test.version -= 1;
    });
  },
  setType: (next: ObjectStore["type"]) => {
    setter((draft) => {
      draft.type = next;
    });
  }
}));
