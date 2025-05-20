"use client";
import RecordNumberController from "./RecordNumberController";
import RecordNumberViewer from "./RecordNumberViewer";
import RecordTypeController from "./RecordTypeController";
import RecordTypeViewer from "./RecordTypeViewer";

function Record() {
  return (
    <div>
      <div className="first:mb-2 w-[10rem] border px-8 py-4 flex justify-between items-center">
        <RecordNumberViewer />
        <RecordNumberController />
      </div>
      <div className="first:mb-2 w-[14rem] border px-8 py-4 flex justify-between items-center">
        <RecordTypeViewer />
        <RecordTypeController />
      </div>
    </div>
  );
}

export default Record;
