"use client";
import { useSyncExternalStore } from "react";
import { getSnapshot, setSnapshot, subscribe } from "@/store/counterStore";

function useCounterStore() {
  const value = useSyncExternalStore(subscribe, getSnapshot, () => 0);

  return [value, setSnapshot] as const;
}

export default useCounterStore;
