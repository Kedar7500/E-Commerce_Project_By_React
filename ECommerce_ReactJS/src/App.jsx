import './App.css'

function App() {
 

  return (
   <div className='w-screen h-screen flex'>
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

      <div className='w-[80%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto  '>
          <div className='mr-3 mb-3 card p-5 border shadow rounded w-[20%] h-[30vh] flex flex-col justify-center items-center'>
              <div className='hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3' 
              style={{backgroundImage: "URL(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}>
              </div>
              <h1 className='hover:text-blue-500'>Lorem ipsum dolor sit amet.</h1>
          </div>
      </div>
   </div>
  )
}

export default App
