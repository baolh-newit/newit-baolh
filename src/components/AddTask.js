import React from 'react'

function AddTask() {
  return (
    <div className='w-full'>
      <form className='bg-white items-center rounded-lg border border-green-400'>
        <h2 className=' bg-green-400 text-white text-xl font-normal py-2 relative rounded-t-lg'>
          Thêm công việc
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 absolute top-2.5 right-4 cursor-pointer hover:text-red-300'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='{2}'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </h2>
        <div className='py-3 px-5'>
          <label className='block text-left pb-2'>Tên</label>
          <input
            className=' py-1.5 w-full bg-gray-100 px-4 outline-none'
            type='text'
            placeholder='Nhập tên công việc'
          />
        </div>
        <div className='py-3 px-5 text-left'>
          <label className=' block pb-2'>Trạng thái</label>
          <select className='block w-full bg-gray-100 py-1.5 px-4 outline-none '>
            <option value>Kích hoạt</option>
            <option value>Ẩn</option>
          </select>
        </div>
        <div className='flex justify-around py-4'>
          <button
            className='bg-green-300 px-8 py-2 rounded-md border border-blue-400 hover:bg-green-400'
            type='submit'
          >
            Thêm mới
          </button>
          <button
            className='bg-red-400 px-8 py-2 rounded-md border border-purple-400 hover:bg-red-500'
            type='submit'
          >
            Xoá dữ liệu
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTask
