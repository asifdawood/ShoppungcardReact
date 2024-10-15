import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from './Context'




const Home = () => {
    const navigate=useNavigate()
    const {listOfProducts} =useContext(ShoppingCartContext)
    const listImages =[]
    const [imageIndex,setImageindex]=useState(0)
    
    const fetchImages=()=>{
          listOfProducts.map((singleProduct)=>
              listImages.push(singleProduct.thumbnail)
          )
      }
   fetchImages()
    // console.log(listImages);
    
    const prev=()=>{
      imageIndex===0? setImageindex(listImages.length-1): setImageindex(imageIndex-1)
    }

    const next=()=>{
      imageIndex===listImages.length-1? setImageindex(0): setImageindex(imageIndex+1)
    }
   
    useEffect(()=>{
      const slideInterval =setInterval(next,3000) 
      return ()=> clearInterval(slideInterval) 
    },)

  return (
    <>
    <h1 className='text-center font-bold text-3xl p-16'>Welcome to Brands</h1>
    <div className='flex gap-10 justify-center mb-10'>
    <button className='border-sky-400 border-2 bg-cyan-100 shadow-lg shadow-black p-2 rounded-xl hover:bg-cyan-200 hover:font-bold' onClick={()=>navigate('/products')}>Products</button>
    <button className='border-sky-400 border-2 bg-cyan-100 shadow-lg shadow-black p-2 px-6 rounded-xl hover:bg-cyan-200 hover:font-bold' onClick={()=>navigate('/cart')}>Cart</button>
    </div>
    <div className='w-full m-auto relative sm:w-1/2'>
      <button className="absolute top-1/2 left-5 sm:left-24 scale-[2.5]" onClick={()=>setImageindex(prev)}>⇦</button>
      <button className="absolute top-1/2 right-5 sm:right-32 scale-200 scale-[2.5]" onClick={()=>setImageindex(next)}>⇨</button>
      <div className='w-1/2 m-auto mb-10'>
      {
     <img className='m-auto'src={listImages[imageIndex]} alt=""  />
    }
    </div>
    </div>
    <div className='flex-wrap flex gap-2 justify-center'>
      {
        listImages.map((slide,index)=>(
          <div  className={`transition-all mt-5  h-3 w-3 rounded-full
            ${imageIndex==index ? 'bg-cyan-200' : 'bg-red-100'}`}
            
           
          onClick={()=>setImageindex(index)}
           key={index} ></div>
        ))
      }
    </div>
    
    
    </>
  )
}

export default Home