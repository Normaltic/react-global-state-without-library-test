"use client";
import useCounterStore from "@/hooks/useCounterStore";

function CounterViewer() {
  const [counter] = useCounterStore();
  return <div>{counter}</div>;
}

export default CounterViewer;
