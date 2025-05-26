import createStore from "@/utils/createStoreWithChanger";

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
} = createStore(initialStore, (setSnapshot) => ({
  increaseVersion: () => {
    setSnapshot((draft) => {
      draft.test.version += 1;
    });
  },
  decreaseVersion: () => {
    setSnapshot((draft) => {
      draft.test.version -= 1;
    });
  },
  setType: (next: ObjectStore["type"]) => {
    setSnapshot((draft) => {
      draft.type = next;
    });
  }
}));
