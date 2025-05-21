import useRecordTypeStore from "@/hooks/useRecordTypeStore";

function RecordTypeController() {
  const [, setValue] = useRecordTypeStore("alpha");

  return (
    <div className="[&>button]:px-2 [&>button]:border">
      <button type="button" onClick={() => setValue("alpha")}>
        alpha
      </button>
      <button type="button" onClick={() => setValue("beta")}>
        beta
      </button>
    </div>
  );
}

export default RecordTypeController;
