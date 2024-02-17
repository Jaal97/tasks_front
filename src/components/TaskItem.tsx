import { Task } from "../interfaces/task.interface";
import { useTasks } from "../context/useTasks";
import { IoCheckmarkDone, IoTrash } from "react-icons/io5";

interface Props {
  task: Task;
}

const TaskItem = ({ task }: Props) => {
  const { deleteTask, updateTask } = useTasks();

  return (
    <div
      key={task._id}
      className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer"
    >
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="flex gap-x-2">
        {task.done ? (
          <IoCheckmarkDone
            className="text-green-500"
            onClick={() => {
              updateTask(task._id, {
                done: !task.done,
              });
            }}
          />
        ) : (
          <IoCheckmarkDone
            className="text-gray-400 hover:text-gray-100"
            onClick={() => {
              updateTask(task._id, {
                done: !task.done,
              });
            }}
          />
        )}

        <IoTrash
          className=" hover:text-red-600"
          onClick={async () => {
            if (!window.confirm("¿Estas seguro de querer eliminar la tarea?"))
              return;
            await deleteTask(task._id);
          }}
        />
      </div>
    </div>
  );
};

export default TaskItem;
