import React from 'react'

const Nav = () => {
  return (
    
        <nav className='w-[20%] h-full flex flex-col items-center p-5 bg-zinc-200'>
            <a className='py-3 px-3 border border-blue-400 text-blue-500 rounded' href='/create'>Add New Product</a>
            <hr className='w-full mt-2'/>
            <h1 className='text-xl font-bold w-[80%] mb-3'>Category</h1>
            <ul className='w-[80%]'>
                <li className='flex items-center mb-3'>
                    <span className='bg-blue-200 w-[15px] h-[15px] rounded-full mr-2 '></span>Category 1
                </li>
                <li className='flex items-center mb-3'>
                    <span className='bg-red-200 w-[15px] h-[15px] rounded-full mr-2 '></span>Category 2
                </li>
                <li className='flex items-center mb-3'>
                    <span className='bg-purple-200 w-[15px] h-[15px] rounded-full mr-2 '></span>Category 3
                </li>
            </ul>
      </nav>

  )
}

export default Nav