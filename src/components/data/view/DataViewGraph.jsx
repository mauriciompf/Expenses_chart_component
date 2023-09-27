import React, { useState } from "react";
import data from "../../../../data.json";

export default function DataViewGraph() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay() - 1;

  const maxAmount = Math.max(...data.map((element) => element.amount));

  const [hoveredAmount, setHoveredAmount] = useState(null);

  const list = data.map((element, index) => {
    const percentage = (element.amount / maxAmount) * 100;

    const backgroundColorClass =
      index === currentDay ? "bg-pri-cyan" : "bg-pri-soft-red";

    return (
      <li className="relative text-center" key={index}>
        <div
          className={`w-8 cursor-pointer rounded-sm ${backgroundColorClass} mb-2 hover:opacity-50`}
          style={{ height: percentage }}
          onMouseOver={() => setHoveredAmount(element.amount)}
          onMouseOut={() => setHoveredAmount(null)}
        ></div>
        {hoveredAmount === element.amount && (
          <div className="absolute -left-[0.4rem] -top-7 w-auto rounded-md bg-neu-park-brown p-1 text-xs font-bold text-white md:-left-[0.8rem] md:-top-11 md:p-2 md:text-sm">
            ${hoveredAmount}
          </div>
        )}
        <span className="block text-xs text-neu-medium-brown ">
          {element.day}
        </span>
      </li>
    );
  });

  return (
    <div>
      <ul className="flex h-full items-end justify-between border-b-4 border-b-neu-cream pb-4">
        {list}
      </ul>
    </div>
  );
}
