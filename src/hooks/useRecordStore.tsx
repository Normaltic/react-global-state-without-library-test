"use client";
import { useCallback, useSyncExternalStore } from "react";
import { getSnapshot, setSnapshot, subscribe } from "@/store/recordStore";

function useRecordStore<T>(key: string, initialValue: T) {
  const value = useSyncExternalStore<T>(
    (cb) => subscribe(key, cb),
    () => getSnapshot(key, initialValue),
    () => initialValue
  );

  const setter = useCallback((value: T) => setSnapshot(key, value), [key]);

  return [value, setter] as const;
}

export default useRecordStore;
