import DataValueTotal from "./DataValueTotal";
import DataValueLastMouth from "./DataValueLastMouth";

export default function DataValues() {
  return (
    <div className="flex justify-between items-end">
      <DataValueTotal />
      <DataValueLastMouth />
    </div>
  );
}
