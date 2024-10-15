import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from './Context'

  
const ProductTile = ({singleProduct}) => {
    const navigate= useNavigate()
 const{handleAddToCart, cartItems}=useContext(ShoppingCartContext)

    function navigateToProductDetail(currentId){
        // console.log(currentId);
        navigate(`/product-details/${currentId}`)
    }
    
  return (
    <>
    <div className='flex flex-col w-72 pb-6 mb-8 shadow-lg'>
        <div className='text-center'>
            <img src={singleProduct.thumbnail} alt={singleProduct.title} />
            
        </div>

        <div>
           <div className='text-center'>
            <p> 
                {singleProduct.title}
                </p>
            </div> 
            <div className='text-end pr-10 font-semibold'>
                <p>${singleProduct.price}</p>
            </div>
        </div>
       <div className='flex justify-around mt-3'>
        <button  className='border-sky-400 border-2 bg-cyan-100 shadow-lg shadow-black p-2 rounded-xl hover:bg-cyan-200 hover:font-bold'onClick={()=>navigateToProductDetail(singleProduct.id)}>View Details</button>
    <button className='border-sky-400 border-2 bg-cyan-100 shadow-lg shadow-black p-2 rounded-xl hover:bg-cyan-200 hover:font-bold'
    disabled={cartItems.findIndex((item)=> item.id===singleProduct.id) >-1}
     onClick={(()=> handleAddToCart(singleProduct))}>Add to Cart</button>
    </div>
    </div>
    </>
  )
}

export default ProductTile