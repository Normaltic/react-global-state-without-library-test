"use client";
import useRecordStore from "@/hooks/useRecordStore";

function RecordNumberViewer() {
  const [value] = useRecordStore("number", 0);
  return <div>{value}</div>;
}

export default RecordNumberViewer;
