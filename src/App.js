function App() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl text-center font-semibold py-4 border-b-2'>
        Quản lý công việc
      </h1>
      <div className='grid grid-cols-12 gap-x-10 m-4'>
        <div className='text-center col-start-1 col-end-5'>
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
                <select
                  name
                  id
                  className='block w-full bg-gray-100 py-1.5 px-4 outline-none '
                >
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
        </div>
        <div className='text-center col-end-13 col-span-8 rounded-lg shadow-lg border border-gray-200'>
          <div className='text-left pb-2 ml-6 mt-5'>
            <button className='bg-green-400 py-2 px-10 rounded-md text-white hover:bg-green-500'>
              Thêm công việc
            </button>
          </div>
          <div className=' flex justify-start items-center mx-6 mt-4 relative '>
            <input
              type='text'
              placeholder='Từ khoá...'
              className=' py-1.5 bg-gray-100 px-4 outline-none w-1/2 rounded-l-lg focus:shadow'
            />
            <label className='bg-green-300 px-2 py-1.5 rounded-r-lg border border-white text-white hover:bg-green-400'>
              Tìm kiếm
            </label>
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
              <div className='hover:bg-green-300 px-3'>
                {' '}
                Trạng Thái Kích Hoạt
              </div>
              <div className='hover:bg-green-300 px-3s'>Trạng Thái Ẩn</div>
            </div>
          </div>
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
                        className=' py-1.5 w-full bg-white px-4 outline-none'
                        type='text'
                        placeholder='Nhập tên công việc cần tìm'
                      />
                    </td>
                    <td className='px-4 py-4'>
                      <select
                        name
                        id
                        className='block w-full bg-white py-1.5 px-4 outline-none '
                      >
                        <option value>Tất cả</option>
                        <option value>Kích hoạt</option>
                        <option value>Ẩn</option>
                      </select>
                    </td>
                    <td className='px-4 py-4' />
                  </tr>
                  <tr className='w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0'>
                    <td className='px-4 py-4'>1</td>
                    <td className='px-4 py-4'>Bedram Tamang</td>
                    <td className='px-4 py-4'>
                      <span className='text-sm bg-green-500 text-white rounded-full px-2 py-1'>
                        Active
                      </span>
                    </td>
                    <td className='text-center px-3 py-4 flex gap-5'>
                      <a href='#'>
                        <svg
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
                      </a>
                      <a href='#'>
                        <svg
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
                      </a>
                    </td>
                  </tr>
                  <tr className='w-full font-light text-gray-700 whitespace-no-wrap border'>
                    <td className='px-4 py-4'>2</td>
                    <td className='px-4 py-4'>Taylor Otwel</td>
                    <td className='px-4 py-4'>
                      <span className='text-sm bg-yellow-500 text-white rounded-full px-2 py-1'>
                        Pending
                      </span>
                    </td>
                    <td className='text-center px-3 py-4 flex gap-5'>
                      <a href='#'>
                        <svg
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
                      </a>
                      <a href='#'>
                        <svg
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
                      </a>
                    </td>
                  </tr>
                  <tr className='w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border'>
                    <td className='px-4 py-4'>3</td>
                    <td className='px-4 py-4'>Adam wathan</td>
                    <td className='px-4 py-4'>
                      <span className='text-sm bg-red-500 text-white rounded-full px-2 py-1'>
                        Not Active
                      </span>
                    </td>
                    <td className='text-center px-3 py-4 flex gap-5'>
                      <a href='#'>
                        <svg
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
                      </a>
                      <a href='#'>
                        <svg
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
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
