"use client";
import useRecordTypeStore from "@/hooks/useRecordTypeStore";

function RecordTypeViewer() {
  const [value] = useRecordTypeStore("alpha");
  return <div>{value}</div>;
}

export default RecordTypeViewer;
