import { useEffect, useState } from "react";
import { getTaskRequest } from "../api/task";
import { Task } from "../interfaces/task.interface";
import TaskItem from "./TaskItem";

// const TaskList = () => {

//   useEffect(() => {
//     getTaskRequest()
//       .then((response) => response.json())
//       .then((data) => console.log(data))

//   },[])

//   return (
//     <div>TaskList</div>
//   )
// }

// export default TaskList;

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTaskRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem task={task} key={task._id} />
      ))}
    </div>
  );
}

// export default TaskList;
