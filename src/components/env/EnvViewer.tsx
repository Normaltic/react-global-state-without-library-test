import EnvController from "./EnvController";
import EnvWithSelector from "./EnvWithSelector";

function EnvViewer() {
  return (
    <div className="p-4 border">
      <EnvController />
      <EnvWithSelector />
    </div>
  );
}

export default EnvViewer;
