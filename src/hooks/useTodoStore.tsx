import { subscribe, getSnapshot } from "@/store/todoStore";
import { useSyncExternalStore } from "react";

function useTodoStore() {
  const store = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return store;
}

export default useTodoStore;
