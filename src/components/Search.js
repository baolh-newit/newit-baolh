import React from 'react'

function Search() {
  return (
    <>
      <input
        type='text'
        placeholder='Từ khoá...'
        className=' py-1.5 bg-gray-100 px-4 outline-none w-1/2 rounded-l-lg focus:shadow'
      />
      <label className='bg-green-300 px-2 py-1.5 rounded-r-lg border border-white text-white hover:bg-green-400'>
        Tìm kiếm
      </label>
    </>
  )
}

export default Search
