import DataView from "./view/DataView";
import DataValues from "./values/DataValues";

export default function Data() {
  return (
    <section className="grid gap-4 bg-neu-very-pale-orange rounded-2xl p-4">
      <DataView />
      <DataValues />
    </section>
  );
}
