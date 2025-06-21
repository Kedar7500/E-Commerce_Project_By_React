import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import {ProductContext} from '../utils/Context'
import Loading from '../utils/Loading'
import axios from '../utils/Axios'

const Home = () => {

  const [products] = useContext(ProductContext);
  console.log(products);

  const {search} = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setfilteredProducts] = useState(null)

  const getProductsCategory = async () =>{
    try {
      const {data} = await axios.get(`products/category/${category}`)
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
      if(category && category != "undefined"){
        getProductsCategory();
      }
      else{
        setfilteredProducts(products);
      }
  },[category,products])

  return ( products?
    <>
        <Nav/>
        <div className='w-[80%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto  '>

          {filteredProducts && filteredProducts.map((p,i)=>(
            <Link key={p.id} to={`/details/${p.id}`} className='mr-3 mb-3 card p-5 border shadow rounded w-[20%] h-[30vh] flex flex-col justify-center items-center'>
                <div className='hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3' 
                style={{backgroundImage: `URL(${p.image})`}}>
                </div>
                <h1 className='hover:text-blue-500'>{p.title}</h1>
            </Link>
            ))}
            
        </div>
    </>
    :<Loading/>
  )
}

export default Home