import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Nav/>
        <div className='w-[80%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto  '>
            <Link to={"/details/1"} className='mr-3 mb-3 card p-5 border shadow rounded w-[20%] h-[30vh] flex flex-col justify-center items-center'>
                <div className='hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3' 
                style={{backgroundImage: "URL(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}>
                </div>
                <h1 className='hover:text-blue-500'>Lorem ipsum dolor sit amet.</h1>
            </Link>
        </div>
    </>
  )
}

export default Home