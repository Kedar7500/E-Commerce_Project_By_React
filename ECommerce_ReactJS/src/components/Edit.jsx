import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import { toast } from 'react-toastify';

const Edit = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const[products, setproducts] = useContext(ProductContext);
    const [product, setproduct] = useState({
        title:"",
        image:"",
        description:"",
        price:"",
        category:"",
    });
   

    const changeHandler = (e)=>{
       // console.log(e.target.name, e.target.value);
        setproduct({...product,[e.target.name]:e.target.value});
    }

    useEffect(()=>{
        setproduct(products.filter((p)=>p.id == id)[0]);
    },[id])

    const AddProductHandler = (e)=>{
        e.preventDefault();
        
        if(product.title.trim().length < 5 ||product.image.trim().length < 5 || product.category.trim().length < 5 ||
        product.price.trim().length < 1 || product.description.trim().length < 5 ){
            alert("every input must have atleast 4 characters");
            return;
        }

        const pi = products.findIndex((p)=> p.id == id);
        
        const copyData = [...products];

        copyData[pi] = {...products[pi],...product}
        
    
         setproducts(copyData);
         localStorage.setItem("products",JSON.stringify(copyData));
         toast.success("Product edited successfully");
         navigate(-1);
    }

  return (
    <form onSubmit={AddProductHandler} className='w-screen h-screen p-[5%] items-center flex flex-col'>
    <h1 className='mb-4 text-2xl w-1/2'>Edit Product</h1>
    <hr className='bg-red-300'/>
    <input className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3' 
           type='url' 
           placeholder='image'
           name='image'
           onChange={changeHandler}
           value={product && product.image}
    />
    <input className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3' 
           type='text' 
           placeholder='Title'
           name='title'
           onChange={changeHandler}
           value={product && product.title}
    />
    <div className='flex justify-between w-1/2'>
     <input className='text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3' 
           type='text' 
           placeholder='category'
           name='category'
           onChange={changeHandler}
           value={product && product.category}
    />
    <input className='text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3' 
           type='number' 
           placeholder='price'
           name='price'
           onChange={changeHandler}
           value={product && product.price}
    />
    </div>
     <textarea rows={8} className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3' 
           type='text' 
           placeholder='enter product description here'
           name='description'
           onChange={changeHandler}
           value={product && product.description}
    />
    <div className='w-1/2'>
    <button className='py-3 px-3 border border-blue-400 text-blue-500 rounded'>Edit New Product</button>
    </div>
    </form>
  )
}

export default Edit