"use client";
import useCounterStore from "@/hooks/useCounterStore";

function CounterController() {
  const [value, setCounter] = useCounterStore();

  return (
    <div className="[&>button]:px-2 [&>button]:border">
      <button type="button" onClick={() => setCounter(value + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCounter(value - 1)}>
        -
      </button>
    </div>
  );
}

export default CounterController;
