"use client";
import { useStoreWithSelector } from "@/store/objectStoreWithFunction";

function ObjectWithSelector() {
  const value = useStoreWithSelector(
    (store) => {
      return {
        version: store.test.version,
        type: store.type
      };
    },
    (a, b) => {
      return a.type === b.type && a.version === b.version;
    }
  );

  return <div className="p-4 border">{JSON.stringify(value)}</div>;
}

export default ObjectWithSelector;
