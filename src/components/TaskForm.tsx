import { ChangeEvent, FormEvent, useState } from 'react';
import { useTasks } from '../context/useTasks';


export const TaskForm = () => {

  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });


  const {createTask} = useTasks()


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTask({...task,[e.target.name]: e.target.value});


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name='title'
        className='border-2 border-gray-500 p-2 rounded-lg bg-neutral-700 block w-full my-2 hover:bg-neutral-600'
        placeholder='Escribe un titulo'
        onChange={handleChange}
        value={task.title}
        />

        <textarea name="description" id="" rows={3}
          className='border-2 border-gray-500 p-2 rounded-lg bg-neutral-700 block w-full my-2 hover:bg-neutral-600'
          placeholder='Escribe una descripción'
          onChange={handleChange}
          value={task.description}
        >

        </textarea>

        <label htmlFor=""
          className='inline-flex items-center gap-x-2'
          >
          <input type="checkbox" 
            name='done' 
            id=''
            className='h-5 w-5 text-indigo-600'
            onChange={() => setTask({...task, done: !task.done})
            }
            />
          <span>Done</span>
        </label>

          <button className='bg-indigo-800 px-3 block py-2 w-full hover:bg-indigo-700'>
            Save
          </button>
      </form>
    </div>
  )
}
