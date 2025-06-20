import axios from '../utils/Axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../utils/Loading';

const Details = () => {

  const {id} = useParams();
  console.log(id);

  const [product, setProduct] = useState(null)

  const getSingleProduct = async () =>{
    try {

      const {data} = await axios.get(`/products/${id}`)
      console.log(data);
      setProduct(data);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getSingleProduct();
  },[])

  return ( product ?
    <div key={product.id} className='flex items-center justify-center w-[70%] h-full m-auto p-[10%] border'>
        <img className='object-contain h-[70%] w-[50%]' src={`${product.image}`} alt=''/>
        <div className='p-5 content w-[80%] h-[60%]'>
            <h1 className='text-2xl'>{product.title}</h1>
            <h1 className='mt-3'>$ {product.price}</h1>
            <h1 className='text-zinc-400 mt-2'>{product.category}</h1>
            <p className='mb-5'>{product.description}</p>
            <Link className='mr-5 py-3 px-3 border border-blue-400 text-blue-500 rounded'>Edit</Link>
            <Link className='py-3 px-3 border border-red-400 text-red-500 rounded'>Delete</Link>
        </div> 
    </div>: <Loading/>
  )
}

export default Details