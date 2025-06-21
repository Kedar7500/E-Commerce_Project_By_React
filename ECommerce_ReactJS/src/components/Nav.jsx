import React, { useContext } from 'react'
import {ProductContext} from '../utils/Context'
import { Link } from 'react-router-dom'

const Nav = () => {

    const [products] = useContext(ProductContext);

    let distinct_category = products.map((p)=> p.category)

    distinct_category = [...new Set(distinct_category)];

   // console.log(distinct_category);

    const color = () => {
        return `rgba(${(Math.random() * 255).toFixed()}, 
        ${(Math.random() * 255).toFixed()}, 
        ${(Math.random() * 255).toFixed()}, 0.4)`;
      };
      

    //console.log(color());
   
  return (
    
        <nav className='w-[20%] h-full flex flex-col items-center p-5 bg-zinc-200'>
            <a className='py-3 px-3 border border-blue-400 text-blue-500 rounded' href='/create'>Add New Product</a>
            <hr className='w-full mt-2'/>
            <h1 className='text-xl font-bold w-[80%] mb-3'>Category</h1>
            <div className='w-[80%]'>
                {distinct_category.map((c,i)=>(

                <Link 
                key={i} 
                to={`/?category=${c}`} 
                className='flex items-center mb-3'>
                    <span style={{backgroundColor: color()}} className=' w-[15px] h-[15px] rounded-full mr-2 '></span>{c}
                </Link>

                ))}
                
                
            </div>
      </nav>

  )
}

export default Nav