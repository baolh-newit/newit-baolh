import { useState } from 'react'
import AddTask from './components/AddTask'
import Control from './components/Control'
import TaskList from './components/TaskList'
import { createTask } from './services/listToDo'

function App() {
  const [isDisplayForm, setIsDisplayForm] = useState(false)
  const [title, setTitle] = useState('')
  const [data, setData] = useState([])

  const newTask = (value) => {
    setIsDisplayForm(true)
    setTitle(value)
  }
  const onShowForm = (value) => {
    setIsDisplayForm(true)
    setTitle(value)
  }

  const onSubmit = (value) => {
    let newTasks = [...data]
    newTasks.push(value)
    setData(newTasks)
    createTask(newTasks)
      .then((res) => res.data)
      .catch((err) => console.log('Có vấn đề xảy ra'))
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
