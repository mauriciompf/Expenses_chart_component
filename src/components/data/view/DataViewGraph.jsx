import data from "../../../../data.json";

export default function DataViewGraph() {
  const list = [];

  const weekData = data.map((element, index) => ({
    ...element,
    id: index,
  }));

  weekData.forEach((element) => {
    list.push(
      <li className="grid items-center gap-2" key={element.id}>
        <div
          className="bg-pri-soft-red w-8 rounded-sm"
          style={{ height: element.amount * 3 }}
        ></div>
        <span className="text-center text-xs text-neu-medium-brown font-semibold">
          {element.day}
        </span>
      </li>
    );
  });

  return (
    <ul className="flex justify-between items-end pb-4 border-b-4 border-b-neu-cream">
      {list}
    </ul>
  );
}
