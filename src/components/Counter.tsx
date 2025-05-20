"use client";
import CounterController from "@/components/CounterController";
import CounterViewer from "@/components/CounterViewer";

function Counter() {
  return (
    <div className="first:mb-2 w-[10rem] border px-8 py-4 flex justify-between items-center">
      <CounterViewer />
      <CounterController />
    </div>
  );
}

export default Counter;
