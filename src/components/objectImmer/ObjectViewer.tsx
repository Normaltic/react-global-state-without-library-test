import ObjectController from "./ObjectController";
import ObjectWithSelector from "./ObjectWithSelector";

function ObjectViewer() {
  return (
    <div className="p-4 border">
      <ObjectController />
      <ObjectWithSelector />
    </div>
  );
}

export default ObjectViewer;
