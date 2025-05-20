import useRecordStore from "./useRecordStore";

type Types = "alpha" | "beta";

function useRecordTypeStore(initialValue: Types) {
  const [value, setValue] = useRecordStore<Types>("type", initialValue);

  return [value, setValue] as const;
}

export default useRecordTypeStore;
