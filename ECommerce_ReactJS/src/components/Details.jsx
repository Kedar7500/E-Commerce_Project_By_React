import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className='flex items-center justify-center w-[70%] h-full m-auto p-[10%] border'>
        <img className='object-contain h-[70%] w-[50%]' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt=''/>
        <div className='p-5 content w-[80%] h-[60%]'>
            <h1 className='text-2xl'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <h1 className='mt-3'>$ 109.95</h1>
            <h1 className='text-zinc-400 mt-2'>men's clothing</h1>
            <p className='mb-5'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
            <Link className='mr-5 py-3 px-3 border border-blue-400 text-blue-500 rounded'>Edit</Link>
            <Link className='py-3 px-3 border border-red-400 text-red-500 rounded'>Delete</Link>
        </div>
    </div>
  )
}

export default Details