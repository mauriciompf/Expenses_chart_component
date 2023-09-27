import DataView from "./view/DataView";
import DataValues from "./values/DataValues";

export default function Data() {
  return (
    <section className="grid gap-6 rounded-2xl bg-neu-very-pale-orange p-6 pb-8">
      <DataView />
      <DataValues />
    </section>
  );
}
