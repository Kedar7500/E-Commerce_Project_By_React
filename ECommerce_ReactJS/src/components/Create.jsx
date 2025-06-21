import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';
import {nanoid} from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {

    const navigate = useNavigate();
    const[products, setproducts] = useContext(ProductContext);
    const [title, settitle] = useState("");
    const [image, setimage] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [description, setDescription] = useState("");

    const AddProductHandler = (e)=>{
        e.preventDefault();
        
        if(title.trim().length < 5 ||image.trim().length < 5 || category.trim().length < 5 ||
        price.trim().length < 1 || description.trim().length < 5 ){
            alert("every input must have atleast 4 characters");
            return;
        }

        const product ={
            id:nanoid(),
            title,
            image,
            category,
            price,
            description,
        };
    
        setproducts([...products, product]);
        localStorage.setItem("products",JSON.stringify([...products, product]));
        toast.success("Product added successfully");
        navigate("/");
    }

  return (
    <form onSubmit={AddProductHandler} className='w-screen h-screen p-[5%] items-center flex flex-col'>
    <h1 className='mb-4 text-2xl w-1/2'>Add New Product</h1>
    <hr className='bg-red-300'/>
    <input className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3' 
           type='url' 
           placeholder='image'
           onChange={(e)=> setimage(e.target.value)}
           value={image}
    />
    <input className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3' 
           type='text' 
           placeholder='Title'
           onChange={(e)=> settitle(e.target.value)}
           value={title}
    />
    <div className='flex justify-between w-1/2'>
     <input className='text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3' 
           type='text' 
           placeholder='category'
           onChange={(e)=> setcategory(e.target.value)}
           value={category}
    />
    <input className='text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3' 
           type='number' 
           placeholder='price'
           onChange={(e)=> setprice(e.target.value)}
           value={price}
    />
    </div>
     <textarea rows={8} className='text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3' 
           type='text' 
           placeholder='enter product description here'
           onChange={(e)=> setDescription(e.target.value)}
           value={description}
    />
    <div className='w-1/2'>
    <button className='py-3 px-3 border border-blue-400 text-blue-500 rounded'>Add New Product</button>
    </div>
    </form>
  )
}

export default Create