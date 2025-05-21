"use client";
import useObjectStore from "@/hooks/useObjectStore";
import { setSnapshot } from "@/store/objectStore";

function ObjectController() {
  const store = useObjectStore();
  return (
    <div>
      <div className="flex">
        <p className="mr-2">Version</p>
        <button
          type="button"
          className="border px-2"
          onClick={() =>
            setSnapshot({
              test: { ...store.test, version: store.test.version + 1 }
            })
          }
        >
          +
        </button>
        <button
          type="button"
          className="border px-2"
          onClick={() => {
            setSnapshot({
              test: { ...store.test, version: store.test.version - 1 }
            });
          }}
        >
          -
        </button>
      </div>

      <div className="flex">
        <p className="mr-2">Type</p>
        <button
          type="button"
          className="border px-2"
          onClick={() => {
            setSnapshot({ type: "alpha" });
          }}
        >
          alpha
        </button>
        <button
          type="button"
          className="border px-2"
          onClick={() => {
            setSnapshot({ type: "beta" });
          }}
        >
          beta
        </button>
      </div>
    </div>
  );
}

export default ObjectController;
