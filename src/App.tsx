
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskProvider } from './context/TaskContext';

const App = () => {
  return (
    <div className='bg-zinc-800  h-screen text-white flex items-center justify-center'>
      <div className='bg-gray-900 p-4 sm:w-2/4 md:w-2/4 lg:w-2/6 border-solid border-2 border-sky-900 rounded' >
        <h1 className='text-3xl font-bold text-center block my-2 hover:text-indigo-700'>
          Task App
        </h1>
        <TaskProvider>
          <TaskForm/>
          <TaskList/>
        </TaskProvider>
      </div>
    </div>
  )
}

export default App