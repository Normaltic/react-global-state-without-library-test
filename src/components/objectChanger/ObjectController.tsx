"use client";
import {
  setType,
  increaseVersion,
  decreaseVersion
} from "@/store/objectStoreWithChanger";

function ObjectController() {
  return (
    <div>
      <div className="flex">
        <p className="mr-2">Version</p>
        <button type="button" className="border px-2" onClick={increaseVersion}>
          +
        </button>
        <button type="button" className="border px-2" onClick={decreaseVersion}>
          -
        </button>
      </div>

      <div className="flex">
        <p className="mr-2">Type</p>
        <button
          type="button"
          className="border px-2"
          onClick={() => setType("alpha")}
        >
          alpha
        </button>
        <button
          type="button"
          className="border px-2"
          onClick={() => setType("beta")}
        >
          beta
        </button>
      </div>
    </div>
  );
}

export default ObjectController;
