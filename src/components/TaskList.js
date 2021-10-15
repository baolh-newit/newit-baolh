import React, { useState } from 'react'
import TaskItem from './TaskItem'

function TaskList(props) {
  const [inputFilter, setInputFilter] = useState({
    filterName: '',
    filterStatus: 'All',
  })
  const onChange = (event) => {
    const { name, value } = event.target
    setInputFilter({ [name]: value })
    let filter = { name, value }
    props.onFilter(filter)
  }

  return (
    <div className='bg-white rounded-lg py-6'>
      <div className='block overflow-x-auto mx-6'>
        <table className='w-full text-left rounded-lg'>
          <thead>
            <tr className='text-gray-800 border border-b-0'>
              <th className='px-4 py-3'>#</th>
              <th className='px-4 py-3'>Tên công việc</th>
              <th className='px-4 py-3'>Trạng thái</th>
              <th className='px-4 py-3'>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr className='w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0'>
              <td className='px-4 py-4' />
              <td className='px-4 py-4'>
                <input
                  name='filterName'
                  value={inputFilter.filterName}
                  onChange={onChange}
                  className=' py-1.5 w-full bg-white px-4 outline-none'
                  type='text'
                  placeholder='Nhập tên công việc cần tìm'
                />
              </td>
              <td className='px-4 py-4'>
                <select
                  onChange={onChange}
                  name='filterStatus'
                  className='block w-full bg-white py-1.5 px-4 outline-none '
                >
                  <option value='All'>Tất cả</option>
                  <option value='Active'>Kích hoạt</option>
                  <option value='Hide'>Ẩn</option>
                </select>
              </td>
              <td className='px-4 py-4' />
            </tr>
            <TaskItem
              onShowForm={props.onShowForm}
              data={props.data}
              onDelete={props.onDelete}
              onUpdate={props.onUpdate}
              onChangeStatus={props.onChangeStatus}
              onChange={onChange}
            />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TaskList
