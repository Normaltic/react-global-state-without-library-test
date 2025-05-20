"use client";
import { useSyncExternalStore } from "react";
import { getSnapshot, setSnapShot, subscribe } from "@/store/counterStore";

function useCounterStore() {
  const value = useSyncExternalStore(subscribe, getSnapshot, () => 0);

  return [value, setSnapShot] as const;
}

export default useCounterStore;
