import createStore from "@/utils/createStoreWithChanger";

export interface EnvStore {
  release: {
    version: number;
    name: string;
  };
  type: "alpha" | "beta";
}

const initialStore: EnvStore = {
  release: {
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
      draft.release.version += 1;
    });
  },
  decreaseVersion: () => {
    setSnapshot((draft) => {
      draft.release.version -= 1;
    });
  },
  setType: (next: EnvStore["type"]) => {
    setSnapshot((draft) => {
      draft.type = next;
    });
  }
}));
