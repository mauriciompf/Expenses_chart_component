import data from "C:/mauricio/front-end_mentor_projects/expenses-chart-component-main/data.json";

export default function DataViewGraph() {
  const list = [];

  const weekData = data.map((element, index) => ({
    ...element,
    id: index,
  }));

  weekData.forEach((element) => {
    list.push(
      <li key={element.id}>
        <div>{element.amount}</div>
        <span>{element.day}</span>
      </li>
    );
  });

  return <ul>{list}</ul>;
}
