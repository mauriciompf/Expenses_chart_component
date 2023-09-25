import DataViewGraph from "./DataViewGraph";

export default function DataView() {
  return (
    <div className="grid gap-12">
      <p className="text-neu-park-brown font-bold text-2xl">
        Spending - Last 7 days
      </p>
      <DataViewGraph />
    </div>
  );
}
