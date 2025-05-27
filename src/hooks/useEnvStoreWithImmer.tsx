import { useSyncExternalStoreWithSelector } from "use-sync-external-store/with-selector";
import { subscribe, getSnapshot } from "@/store/envStoreWithImmer";
import type { EnvStore, Selector } from "@/store/envStoreWithImmer";

function useEnvStore<T = EnvStore>(
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

export default useEnvStore;
