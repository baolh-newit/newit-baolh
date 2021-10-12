import AddTask from './components/AddTask'
import Control from './components/Control'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl text-center font-semibold py-4 border-b-2'>
        Quản lý công việc
      </h1>
      <div className='grid grid-cols-12 gap-x-10 m-4'>
        <div className='text-center col-start-1 col-end-5'>
          <AddTask />
        </div>
        <div className='text-center col-end-13 col-span-8 rounded-lg shadow-lg border border-gray-200'>
          <div className='text-left pb-2 ml-6 mt-5'>
            <button className='bg-green-400 py-2 px-10 rounded-md text-white hover:bg-green-500'>
              Thêm công việc
            </button>
          </div>
          <div className=' flex justify-start items-center mx-6 mt-4 relative '>
            <Control />
          </div>
          <TaskList />
        </div>
      </div>
    </div>
  )
}

export default App
