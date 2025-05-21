"use client";
import { setSnapshot } from "@/store/objectStoreWithImmer";

function ObjectController() {
  return (
    <div>
      <div className="flex">
        <p className="mr-2">Version</p>
        <button
          type="button"
          className="border px-2"
          onClick={() =>
            setSnapshot((draft) => {
              draft.test.version = draft.test.version + 1;
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
              draft.test.version = draft.test.version - 1;
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

export default ObjectController;
