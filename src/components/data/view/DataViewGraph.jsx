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
      <li className="text-center relative" key={index}>
        <div
          className={`cursor-pointer w-8 rounded-sm ${backgroundColorClass} hover:opacity-50 mb-2`}
          style={{ height: percentage }}
          onMouseOver={() => setHoveredAmount(element.amount)}
          onMouseOut={() => setHoveredAmount(null)}
        ></div>
        {hoveredAmount === element.amount && (
          <div className="text-xs bg-neu-park-brown text-white absolute w-auto p-1 rounded-md -left-[0.4rem] -top-7 font-bold">
            ${hoveredAmount}
          </div>
        )}
        <span className="block text-xs text-neu-medium-brown font-semibold">
          {element.day}
        </span>
      </li>
    );
  });

  return (
    <div>
      <ul className="flex justify-between h-full items-end pb-4 border-b-4 border-b-neu-cream">
        {list}
      </ul>
    </div>
  );
}
