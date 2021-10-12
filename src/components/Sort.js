import React from 'react'

function Sort() {
  return (
    <>
      <button className='bg-green-300 px-6 py-1.5 ml-20  rounded-md text-white border border-white hover:bg-green-400 group-hover:block '>
        Sắp xếp
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 inline-block pl-1'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='{2}'
            d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
          />
        </svg>
      </button>
      <div className='absolute top-10 right-32 bg-green-100 border border-black-500 rounded-md cursor-pointer mr-2 group hidden'>
        <div className='hover:bg-green-300 px-3'>Tên A-Z</div>
        <div className='hover:bg-green-300 px-3'>Tên Z-A</div>
        <hr />
        <div className='hover:bg-green-300 px-3'> Trạng Thái Kích Hoạt</div>
        <div className='hover:bg-green-300 px-3s'>Trạng Thái Ẩn</div>
      </div>
    </>
  )
}

export default Sort
