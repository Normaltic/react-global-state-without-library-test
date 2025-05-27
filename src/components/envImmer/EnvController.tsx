"use client";
import { setSnapshot } from "@/store/envStoreWithImmer";

function EnvController() {
  return (
    <div>
      <div className="flex">
        <p className="mr-2">Version</p>
        <button
          type="button"
          className="border px-2"
          onClick={() =>
            setSnapshot((draft) => {
              draft.release.version = draft.release.version + 1;
            })
          }
        >
          +
        </button>
        <button
          type="button"
          className="border px-2"
          onClick={() => {
            setSnapshot((draft) => {
              draft.release.version = draft.release.version - 1;
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
            setSnapshot((draft) => {
              draft.type = "alpha";
            });
          }}
        >
          alpha
        </button>
        <button
          type="button"
          className="border px-2"
          onClick={() => {
            setSnapshot((draft) => {
              draft.type = "beta";
            });
          }}
        >
          beta
        </button>
      </div>
    </div>
  );
}

export default EnvController;
