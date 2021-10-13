import { useEffect, useState } from 'react'
import AddTask from './components/AddTask'
import Control from './components/Control'
import TaskList from './components/TaskList'
import {
  createTask,
  deleteTask,
  getList,
  updateTask,
} from './services/listToDo'

function App() {
  const [isDisplayForm, setIsDisplayForm] = useState(false)
  const [title, setTitle] = useState('')
  const [data, setData] = useState()
  const [editTask, setEditTask] = useState(null)

  const newTask = (value) => {
    setIsDisplayForm(true)
    setTitle(value)
    setEditTask(null)
  }
  const onShowForm = (value) => {
    setIsDisplayForm(true)
    setTitle(value)
  }

  useEffect(() => {
    let mounted = true
    getList()
      .then((items) => {
        if (mounted) {
          setData(items)
        }
      })
      .catch((err) => console.log(err))
    return () => (mounted = false)
  }, [])

  const onSubmit = (value) => {
    let newTasks = [...data]
    if (value.id === '') {
      newTasks.push(value)
      setData(newTasks)
      createTask(value).catch((err) => console.log('Có vấn đề xảy ra', err))
    } else {
      const index = findIndex(value.id)
      newTasks[index] = value
      setData(newTasks)
      updateTask(value).catch((err) => console.log('Có vấn đề xảy ra', err))
    }
  }

  // tìm index của task
  const findIndex = (id) => {
    const tasks = [...data]
    let result = -1
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index
      }
    })
    return result
  }

  const onDelete = (id) => {
    let tasks = [...data]
    const index = findIndex(id)
    if (index !== -1) {
      tasks.splice(index, 1)
      setData(tasks)
    }
    setIsDisplayForm(false)
    setEditTask(null)
    deleteTask(id)
  }
  const onUpdate = (id) => {
    let tasks = [...data]
    const index = findIndex(id)
    const editTask = tasks[index]
    setEditTask(editTask)
  }
  const onChangeStatus = (id) => {
    let tasks = [...data]
    const index = findIndex(id)
    tasks[index].status = !tasks[index].status
    setData(tasks)
    updateTask(tasks[index])
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
              editTask={editTask}
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
          <TaskList
            onShowForm={(value) => onShowForm(value)}
            data={data}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onChangeStatus={onChangeStatus}
          />
        </div>
      </div>
    </div>
  )
}

export default App
