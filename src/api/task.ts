import { CreateTask, UpdateTask } from "../interfaces/task.interface";

const API = "http://3.19.72.172:3000/api";

export const createTaskRequest = (task: CreateTask) =>
  fetch(`${API}/tasks`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Access-Control-Allow-Origin": '*',
      "Content-Type": "application/json",
    },
  });

export const getTaskRequest = () => 
fetch(`${API}/tasks`,
{
  method: "GET",
  headers:{
    "Access-Control-Allow-Origin": '*',
  }
}
);

export const deleteTaskRequest = (id: string) =>
  fetch(`${API}/tasks/${id}`, {
    method: "DELETE",
    headers:{
      "Access-Control-Allow-Origin": '*',
    }
  });

export const updateTaskRequest = (id: string, task: UpdateTask) =>
  fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Access-Control-Allow-Origin": '*',
      "Content-Type": "application/json",
    },
  });
