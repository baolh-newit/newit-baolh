import { useState } from 'react'
import AddTask from './components/AddTask'
import Control from './components/Control'
import TaskList from './components/TaskList'

function App() {
  const [isDisplayForm, setIsDisplayForm] = useState(false)
  const [title, setTitle] = useState('')
  const [tasks, setTasks] = useState([])

  const data = JSON.parse(localStorage.getItem('tasks'))

  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  const generateID = () => {
    return s4() + s4() + '_' + s4() + s4() + '_' + s4() + s4()
  }

  const newTask = (value) => {
    setIsDisplayForm(true)
    setTitle(value)
  }
  const onShowForm = (value) => {
    setIsDisplayForm(true)
    setTitle(value)
  }

  const onSubmit = (value) => {
    let newTasks = [...tasks]
    if (value.id === '') {
      value.id = generateID()
      newTasks.push(value)
    } else {
      console.log('findIndex')
    }
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl text-center font-semibold py-4 border-b-2'>
        Quản lý công việc
      </h1>
      <div className='grid grid-cols-12 gap-x-10 m-4'>
        <div className='text-center col-start-1 col-end-5'>
          {isDisplayForm === true ? (
            <AddTask
              closeForm={() => setIsDisplayForm(false)}
              title={title}
              onSubmit={(value) => onSubmit(value)}
            />
          ) : (
            ''
          )}
        </div>
        <div
          className={
            isDisplayForm === true
              ? 'text-center col-end-13 col-span-8 rounded-lg shadow-lg border border-gray-200'
              : 'text-center col-end-13 col-span-12 rounded-lg shadow-lg border border-gray-200'
          }
        >
          <div className='text-left pb-2 ml-6 mt-5'>
            <button
              className='bg-green-400 py-2 px-10 rounded-md text-white hover:bg-green-500'
              onClick={() => newTask('add')}
            >
              Thêm công việc
            </button>
          </div>
          <div className=' flex justify-start items-center mx-6 mt-4 relative '>
            <Control />
          </div>
          <TaskList onShowForm={(value) => onShowForm(value)} data={data} />
        </div>
      </div>
    </div>
  )
}

export default App
