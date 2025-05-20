import { subscribe, getSnapshot, initialTodoStore } from "@/store/todoStore";
import { useSyncExternalStore } from "react";

function useTodoStore() {
  const store = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => initialTodoStore
  );

  return store;
}

export default useTodoStore;
