import LongMenu from "./DropDownButton";
import data from "./data.json";

const TaskTitles = data.task_lists
  .sort((a: any, b: any) => (a.position > b.position ? 1 : -1))
  .map((task: any) => {
    return task.name;
  });

export default function TaskContainer(props: any) {
  return (
    <div className="flex justify-between px-6 ">
      <span className="flex">
        <h1 className="font-bold">{props.taskTitle}</h1>
        <h1 className="pl-3 text-gray-600 font-semibold">({props.number})</h1>
      </span>
      <LongMenu />
    </div>
  );
}
