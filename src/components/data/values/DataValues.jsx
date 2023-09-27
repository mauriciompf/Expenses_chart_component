import DataValueTotal from "./DataValueTotal";
import DataValueLastMouth from "./DataValueLastMouth";

export default function DataValues() {
  return (
    <div className="flex items-end justify-between">
      <DataValueTotal />
      <DataValueLastMouth />
    </div>
  );
}
