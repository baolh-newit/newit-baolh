import React from 'react'
import { useState } from 'react/cjs/react.development'

function Sort(props) {
  const [isSort, setIsSort] = useState(false)
  const [inputSort, setInputSort] = useState({
    by: 'name',
    value: 1,
    title: 'Sắp xếp',
  })

  const onShowSort = () => {
    setIsSort(!isSort)
  }
  const onSort = (by, value, title) => {
    setInputSort({ ...inputSort, by, value, title })
    let sort = { by, value }
    props.onSort(sort)
  }

  return (
    <>
      <button
        onClick={onShowSort}
        className='bg-green-300 px-6 py-1.5 ml-20  rounded-md text-white border border-white hover:bg-green-400 group-hover:block '
      >
        {inputSort.title}
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
      <div
        onClick={() => setIsSort(false)}
        className={
          isSort
            ? 'absolute top-10 right-96 bg-green-100 border border-black-500 rounded-md cursor-pointer mr-2 group'
            : 'absolute top-10 right-96 bg-green-100 border border-black-500 rounded-md cursor-pointer mr-2 group hidden'
        }
      >
        <div
          onClick={() => onSort('name', 1, 'Tên A-Z')}
          className={
            inputSort.by === 'name' && inputSort.value === 1
              ? 'bg-green-300  px-3'
              : 'hover:bg-green-200 px-3'
          }
        >
          Tên A-Z
        </div>
        <div
          onClick={() => onSort('name', -1, 'Tên Z-A')}
          className={
            inputSort.by === 'name' && inputSort.value === -1
              ? 'bg-green-300  px-3'
              : 'hover:bg-green-200 px-3'
          }
        >
          Tên Z-A
        </div>
        <hr />
        <div
          onClick={() => onSort('status', 1, 'Trạng Thái Kích Hoạt')}
          className={
            inputSort.by === 'status' && inputSort.value === 1
              ? 'bg-green-300  px-3'
              : 'hover:bg-green-200 px-3'
          }
        >
          {' '}
          Trạng Thái Kích Hoạt
        </div>
        <div
          onClick={() => onSort('status', -1, 'Trạng Thái Ẩn')}
          className={
            inputSort.by === 'status' && inputSort.value === -1
              ? 'bg-green-300  px-3'
              : 'hover:bg-green-200 px-3'
          }
        >
          Trạng Thái Ẩn
        </div>
      </div>
    </>
  )
}

export default Sort
