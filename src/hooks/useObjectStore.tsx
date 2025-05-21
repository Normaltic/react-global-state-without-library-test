import { useSyncExternalStoreWithSelector } from "use-sync-external-store/with-selector";
import { subscribe, getSnapshot } from "@/store/objectStore";
import type { ObjectStore, Selector } from "@/store/objectStore";

function useObjectStore<T = ObjectStore>(
  selector: Selector<T> = (store) => store as T,
  isEqual: (a: T, b: T) => boolean = (a, b) => a === b
) {
  const value = useSyncExternalStoreWithSelector(
    subscribe,
    getSnapshot,
    getSnapshot,
    selector,
    isEqual
  );

  return value;
}

export default useObjectStore;
