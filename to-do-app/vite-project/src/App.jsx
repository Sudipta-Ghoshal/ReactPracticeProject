
import './App.css'
import AddTask from './components/AddTask'
import DoneList from './components/Done'
import TodoList from './components/Todo'

function ToDoApp() {
  return (
    <div className='flex min-h-screen justify-center items-center bg-primary py-10'>
      <div className='w-[432px] myClass'>
        <AddTask />
        <TodoList />
        <DoneList />
      </div>
    </div>
  )
}

export default ToDoApp
