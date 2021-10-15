import React from 'react'
import { useState } from 'react/cjs/react.development'

function TaskItem(props) {
  const [search, setSearch] = useState('')
  const { data } = props

  const onDelete = (id) => {
    props.onDelete(id)
  }
  const onUpdate = (id) => {
    props.onShowForm('edit')
    props.onUpdate(id)
  }
  const onChangeStatus = (id) => {
    props.onChangeStatus(id)
  }
  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <tr
              key={index}
              className='w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0'
            >
              <td className='px-4 py-4'>{index + 1}</td>
              <td className='px-4 py-4'>{item.name}</td>
              <td className='px-4 py-4'>
                <span
                  onClick={() => onChangeStatus(item.id)}
                  className={
                    item.status === true
                      ? 'text-sm bg-green-500 text-white rounded-full px-2 py-1'
                      : 'text-sm bg-red-500 text-white rounded-full px-7 py-1'
                  }
                >
                  {item.status === true ? 'Kích hoạt' : 'Ẩn'}
                </span>
              </td>
              <td className='text-center px-3 py-4 flex gap-5'>
                <button>
                  <svg
                    onClick={() => onUpdate(item.id)}
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-green-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    onClick={() => onDelete(item.id)}
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-red-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </button>
              </td>
            </tr>
          )
        })}
    </>
  )
}

export default TaskItem
