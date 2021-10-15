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
  const [, setSortTask] = useState()
  const [filterItem, setFilterItem] = useState({ name: '', value: '' })
  const [searchItem, setSearchItem] = useState('')

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

  const onSort = (sort) => {
    setSortTask(sort)
    if (sort.by === 'name') {
      data.sort((a, b) => {
        let result = a.name.localeCompare(b.name)
        if (result === 1) {
          return sort.value
        } else if (result === -1) return -sort.value
        else return 0
      })
    } else {
      data.sort((a, b) => {
        if (a.status < b.status) return sort.value
        else if (a.status > b.status) return -sort.value
        else return 0
      })
    }
  }

  const onSearch = (keyword) => {
    let newData = [...data]
    setSearchItem(newData)
    console.log(keyword)
    if (keyword === '') {
      setData(newData)
      console.log(data)
    } else {
      if (keyword) {
        newData = newData.filter(
          (value) =>
            value.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        )
        setData(newData)
      } else {
        setData(searchItem)
      }

      console.log(data)
    }
  }

  const onFilter = (filter) => {
    setFilterItem(data)
    if (filter.value !== '') {
      if (filter.name === 'filterName') {
        let newData = data.filter((task) => {
          return (
            task.name.toLowerCase().indexOf(filter.value.toLowerCase()) !== -1
          )
        })
        setData(newData)
      } else {
        console.log('a')
      }
    } else {
      setData(filterItem)
    }
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
            <Control onSort={onSort} onSearch={onSearch} />
          </div>
          <TaskList
            onShowForm={(value) => onShowForm(value)}
            data={data}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onChangeStatus={onChangeStatus}
            onFilter={onFilter}
          />
        </div>
      </div>
    </div>
  )
}

export default App
