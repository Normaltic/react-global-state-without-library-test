"use client";
import useEnvStore from "@/hooks/useEnvStore";
import { setSnapshot } from "@/store/envStore";

function EnvController() {
  const store = useEnvStore();
  return (
    <div>
      <div className="flex">
        <p className="mr-2">Version</p>
        <button
          type="button"
          className="border px-2"
          onClick={() =>
            setSnapshot({
              release: { ...store.release, version: store.release.version + 1 }
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
              release: { ...store.release, version: store.release.version - 1 }
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

export default EnvController;
