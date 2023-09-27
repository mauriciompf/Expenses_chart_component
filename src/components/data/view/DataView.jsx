import DataViewGraph from "./DataViewGraph";

export default function DataView() {
  return (
    <div className="grid gap-12">
      <p className="text-2xl font-bold text-neu-park-brown">
        Spending - Last 7 days
      </p>
      <DataViewGraph />
    </div>
  );
}
