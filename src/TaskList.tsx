import { useState } from "react";
import BasicCard from "./Card";
import data from "./data.json";
import TaskContainer from "./TaskContainer";
import FormDialog from "./PromptAddTaskList";
import PromptAddTask from "./PromptAddTask";
import PromptAddTaskToNewList from "./PromptAddTaskToNewList";

const TOTAL_TASKS = data.tasks;
const TOTAL_TASK_LIST = data.task_lists;

const idsRandom: number[] = TOTAL_TASKS.map((object) => {
  return object.task_list_id;
});
const TotalColumns: number = Math.max(...idsRandom);
const ids: number[] = Array.from(
  { length: Math.pow(10, TotalColumns) - 1 },
  (value, index) => index + 1
);

const TaskTitles = TOTAL_TASK_LIST.sort((a, b) =>
  a.position > b.position ? 1 : -1
).map((task) => {
  return task.name;
});

const isTaskListTrashed = TOTAL_TASK_LIST.map((task) => {
  return task.is_trashed;
});

const CompletedColumn = TOTAL_TASKS.sort((a, b) =>
  a.position > b.position ? 1 : -1
).filter((notcompleted) => notcompleted.is_completed === true);

const TaskColumns = TOTAL_TASKS.sort((a, b) =>
  a.position > b.position ? 1 : -1
).filter((notcompleted) => notcompleted.is_completed === false);

const TasksFirstColumn = TaskColumns.filter(
  (filtasks) => filtasks.task_list_id === ids[0]
);

const TasksSecondColumn = TaskColumns.filter(
  (filtasks) => filtasks.task_list_id === ids[1]
);

const TasksThirdColumn = TaskColumns.filter(
  (filtasks) => filtasks.task_list_id === ids[2]
);

const TasksFourthColumn = TaskColumns.filter(
  (filtasks) => filtasks.task_list_id === ids[3]
);

const TasksFifthColumn = TaskColumns.filter(
  (filtasks) => filtasks.task_list_id === ids[4]
);

export default function TaskList() {
  const [NewFirstTasksNames, setFirstNewTasksNames] = useState([]);
  const [NewSecondTasksNames, setSecondNewTasksNames] = useState([]);
  const [NewThirdTasksNames, setThirdNewTasksNames] = useState([]);
  const [NewFourthTasksNames, setFourthNewTasksNames] = useState([]);
  const [NewFifthTasksNames, setFifthNewTasksNames] = useState([]);

  const FirstColumnNumber = Object.keys(TasksFirstColumn).length;
  const SecondColumnNumber = Object.keys(TasksSecondColumn).length;
  const ThirdColumnNumber = Object.keys(TasksThirdColumn).length;
  const FourthColumnNumber = Object.keys(TasksFourthColumn).length;
  const FifthColumnNumber = Object.keys(TasksFifthColumn).length;
  const [newTasksNumber, setNewTasksNumber] = useState(0);
  const CompletedColumnNumber = Object.keys(CompletedColumn).length;

  const [newTaskListNames, setNewTaskListNames] = useState([]);
  const [newTaskListCardNames, setNewTaskListCardNames] = useState([{}]);

  const CountCards = (index: number) => {
    let numberOfCards: number = 0;
    newTaskListCardNames.map((map: any) => {
      if (map.id === index) numberOfCards = numberOfCards + 1;
    });
    return numberOfCards;
  };

  return (
    <div className="">
      <div className=" px-10 py-8  flex ">
        {isTaskListTrashed[0] ? (
          ""
        ) : (
          <div className="mx-2  w-1/5 rounded-md">
            <TaskContainer
              number={FirstColumnNumber + newTasksNumber}
              taskTitle={TaskTitles[0]}
            />

            <div className="heightList">
              <div className=" max-h-full scrollbar-thin scrollbar-thumb-gray-700">
                <>
                  {TasksFirstColumn.map((taskname) => (
                    <div key={taskname.id}>
                      <BasicCard
                        startDate={taskname.start_on}
                        dueDate={taskname.due_on}
                        commentCount={taskname.comments_count}
                        openSubtasks={taskname.open_subtasks}
                        border={taskname.is_important}
                        firstLine={taskname.name}
                        label={taskname.labels}
                        avatar={taskname.assignee}
                        completedTasks={false}
                      />
                    </div>
                  ))}
                  {NewFirstTasksNames.map((map: any) => {
                    return (
                      <div key={map.id}>
                        <BasicCard
                          firstLine={map.task}
                          commentCount={0}
                          openSubtasks={0}
                          startDate={null}
                          dueDate={null}
                          border={false}
                          label={0}
                          avatar={[]}
                          completedTasks={false}
                        />
                      </div>
                    );
                  })}
                </>
              </div>

              <PromptAddTask
                setNewTasksNames={setFirstNewTasksNames}
                setNewTasksNumber={setNewTasksNumber}
              />
            </div>
          </div>
        )}

        {isTaskListTrashed[1] ? (
          ""
        ) : (
          <div className="mx-2   w-1/5 rounded-md">
            <TaskContainer
              number={SecondColumnNumber + newTasksNumber}
              taskTitle={TaskTitles[1]}
            />

            <div className="heightList ">
              <div className=" max-h-full scrollbar-thin scrollbar-thumb-gray-700">
                {TasksSecondColumn.map((taskname) => (
                  <div key={taskname.id}>
                    <BasicCard
                      startDate={taskname.start_on}
                      dueDate={taskname.due_on}
                      commentCount={taskname.comments_count}
                      openSubtasks={taskname.open_subtasks}
                      border={taskname.is_important}
                      firstLine={taskname.name}
                      label={taskname.labels}
                      avatar={taskname.assignee}
                      completedTasks={false}
                    />
                  </div>
                ))}
                {NewSecondTasksNames.map((map: any) => {
                  return (
                    <div key={map.id}>
                      <BasicCard
                        firstLine={map.task}
                        commentCount={0}
                        openSubtasks={0}
                        startDate={null}
                        dueDate={null}
                        border={false}
                        label={0}
                        avatar={[]}
                        completedTasks={false}
                      />
                    </div>
                  );
                })}
              </div>
              <PromptAddTask setNewTasksNames={setSecondNewTasksNames} setNewTasksNumber={setNewTasksNumber}/>
            </div>
          </div>
        )}

        {isTaskListTrashed[2] ? (
          ""
        ) : (
          <div className="mx-2  w-1/5 rounded-md">
            <TaskContainer
              number={ThirdColumnNumber + newTasksNumber}
              taskTitle={TaskTitles[2]}
            />

            <div className=" heightList">
              <div className=" max-h-full scrollbar-thin scrollbar-thumb-gray-700">
                {TasksThirdColumn.map((taskname) => (
                  <div key={taskname.id}>
                    <BasicCard
                      startDate={taskname.start_on}
                      dueDate={taskname.due_on}
                      commentCount={taskname.comments_count}
                      openSubtasks={taskname.open_subtasks}
                      border={taskname.is_important}
                      firstLine={taskname.name}
                      label={taskname.labels}
                      avatar={taskname.assignee}
                      completedTasks={false}
                    />
                  </div>
                ))}
                {NewThirdTasksNames.map((map: any) => {
                  return (
                    <div key={map.id}>
                      <BasicCard
                        firstLine={map.task}
                        commentCount={0}
                        openSubtasks={0}
                        startDate={null}
                        dueDate={null}
                        border={false}
                        label={0}
                        avatar={[]}
                        completedTasks={false}
                      />
                    </div>
                  );
                })}
              </div>
              <PromptAddTask setNewTasksNames={setThirdNewTasksNames} setNewTasksNumber={setNewTasksNumber}/>
            </div>
          </div>
        )}

        {isTaskListTrashed[3] ? (
          ""
        ) : (
          <div className="mx-2  w-1/5 rounded-md">
            <TaskContainer
              number={FourthColumnNumber + newTasksNumber}
              taskTitle={TaskTitles[3]}
            />

            <div className=" heightList">
              <div className=" max-h-full scrollbar-thin scrollbar-thumb-gray-700">
                {TasksFourthColumn.map((taskname) => (
                  <div key={taskname.id}>
                    <BasicCard
                      startDate={taskname.start_on}
                      dueDate={taskname.due_on}
                      commentCount={taskname.comments_count}
                      openSubtasks={taskname.open_subtasks}
                      border={taskname.is_important}
                      firstLine={taskname.name}
                      label={taskname.labels}
                      avatar={taskname.assignee}
                      completedTasks={false}
                    />
                  </div>
                ))}
                {NewFourthTasksNames.map((map: any) => {
                  return (
                    <div key={map.id}>
                      <BasicCard
                        firstLine={map.task}
                        commentCount={0}
                        openSubtasks={0}
                        startDate={null}
                        dueDate={null}
                        border={false}
                        label={0}
                        avatar={[]}
                        completedTasks={false}
                      />
                    </div>
                  );
                })}
              </div>
              <PromptAddTask setNewTasksNames={setFourthNewTasksNames} setNewTasksNumber={setNewTasksNumber}/>
            </div>
          </div>
        )}
        {isTaskListTrashed[4] ? (
          ""
        ) : (
          <div className="mx-2  w-1/5 rounded-md">
            <TaskContainer
              number={FifthColumnNumber + newTasksNumber}
              taskTitle={TaskTitles[4]}
            />

            <div className="heightList ">
              <div className=" max-h-full scrollbar-thin scrollbar-thumb-gray-700">
                {TasksFifthColumn.map((taskname) => (
                  <div key={taskname.id}>
                    <BasicCard
                      startDate={taskname.start_on}
                      dueDate={taskname.due_on}
                      commentCount={taskname.comments_count}
                      openSubtasks={taskname.open_subtasks}
                      border={taskname.is_important}
                      firstLine={taskname.name}
                      label={taskname.labels}
                      avatar={taskname.assignee}
                      completedTasks={false}
                    />
                  </div>
                ))}
                {NewFifthTasksNames.map((map: any) => {
                  return (
                    <div key={map.id}>
                      <BasicCard
                        firstLine={map.task}
                        commentCount={0}
                        openSubtasks={0}
                        startDate={null}
                        dueDate={null}
                        border={false}
                        label={0}
                        avatar={[]}
                        completedTasks={false}
                      />
                    </div>
                  );
                })}
              </div>
              <PromptAddTask setNewTasksNames={setFifthNewTasksNames} setNewTasksNumber={setNewTasksNumber}/>
            </div>
          </div>
        )}

        {newTaskListNames.map((map: any, index: number) => {
          return (
            <div key={index} className="mx-2  w-1/5 rounded-md">
              <TaskContainer
                number={CountCards(index)}
                taskTitle={map.tasklist}
              />

              <div className="heightList ">
                <div className=" max-h-full scrollbar-thin scrollbar-thumb-gray-700">
                  {newTaskListCardNames
                    .sort((a: any, b: any) => (a.id > b.id ? 1 : -1))
                    .map((map: any) => {
                      return (
                        <div key={map.id}>
                          <BasicCard
                            firstLine={map.id === index && map.task}
                            commentCount={0}
                            openSubtasks={0}
                            startDate={null}
                            dueDate={null}
                            border={false}
                            label={0}
                            avatar={[]}
                            completedTasks={false}
                          />
                        </div>
                      );
                    })}
                </div>
                <PromptAddTaskToNewList
                  setNew={setNewTaskListCardNames}
                  setIndex={index}
                />
              </div>
            </div>
          );
        })}

        <FormDialog setNewTaskListNames={setNewTaskListNames} />

        <div className="mx-2   w-1/5 rounded-md">
          <TaskContainer
            number={CompletedColumnNumber}
            taskTitle="Completed Tasks"
          />
          <div className="heightList">
            <div className=" max-h-full scrollbar-thin scrollbar-thumb-gray-700">
              {CompletedColumn.map((taskname) => (
                <div key={taskname.id}>
                  <BasicCard
                    completedTasks={true}
                    startDate={taskname.start_on}
                    dueDate={taskname.due_on}
                    commentCount={taskname.comments_count}
                    openSubtasks={taskname.open_subtasks}
                    border={taskname.is_important}
                    firstLine={taskname.name}
                    label={taskname.labels}
                    avatar={taskname.assignee}
                  />
                </div>
              ))}
            </div>
            <button className="m-3 text-indigo-600 font-semibold">
              View Completed Tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
