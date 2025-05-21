"use client";
import useRecordStore from "@/hooks/useRecordStore";

function RecordNumberController() {
  const [value, setValue] = useRecordStore("number", 0);

  return (
    <div className="[&>button]:px-2 [&>button]:border">
      <button type="button" onClick={() => setValue(value + 1)}>
        +
      </button>
      <button type="button" onClick={() => setValue(value - 1)}>
        -
      </button>
    </div>
  );
}

export default RecordNumberController;
