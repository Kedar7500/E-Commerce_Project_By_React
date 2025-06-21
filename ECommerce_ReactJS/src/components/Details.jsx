import axios from '../utils/Axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from '../utils/Loading';
import { ProductContext } from '../utils/Context';
import { toast } from 'react-toastify';

const Details = () => {

  const navigate = useNavigate();
  const[products, setproducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null)
  const {id} = useParams();

  // const getSingleProduct = async () =>{
  //   try {

  //     const {data} = await axios.get(`/products/${id}`)
  //     console.log(data);
  //     setProduct(data);

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(()=>{
    if(!product){
      setProduct(products.filter((p)=> p.id == id)[0])
    }

   // getSingleProduct();

  },[])

  const ProductDeleteHandler = (id) =>{
    const FilteredProducts = products.filter((p) => p.id !== id);
    setproducts(FilteredProducts);
    localStorage.setItem("products", JSON.stringify(FilteredProducts));
    toast.success("product deleted successfully");
    navigate("/")
  }

  return ( product ?
    <div key={product.id} className='flex items-center justify-center w-[70%] h-full m-auto p-[10%] border'>
        <img className='object-contain h-[70%] w-[50%]' src={`${product.image}`} alt=''/>
        <div className='p-5 content w-[80%] h-[60%]'>
            <h1 className='text-2xl'>{product.title}</h1>
            <h1 className='mt-3'>$ {product.price}</h1>
            <h1 className='text-zinc-400 mt-2'>{product.category}</h1>
            <p className='mb-5'>{product.description}</p>
            <Link to={`/edit/${product.id}`} className='mr-5 py-3 px-3 border border-blue-400 text-blue-500 rounded'>Edit</Link>
            <button onClick={()=> ProductDeleteHandler(product.id)} className='py-3 px-3 border border-red-400 text-red-500 rounded'>Delete</button>
        </div> 
    </div>: <Loading/>
  )
}

export default Details