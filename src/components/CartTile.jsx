import React, { useContext } from 'react'
import { ShoppingCartContext } from './Context'

const CartTile = ({ singleCardItem }) => {
    const {handleRemoveFromCart, handleAddToCart} =useContext(ShoppingCartContext)
    return (
        <>
            <div className='grid grid-cols-3 items-start gap-5 my-5'>
                <div className='col-span-2 flex items-start gap-4'>
                    <div className='w-20 h-20 sm:w-28 bg-gray-300'>
                        <img className='w-full h-full object-contain' src={singleCardItem.thumbnail} alt="" />
                    </div>

                    <div className=' mb-10 '>
                        <h3>{singleCardItem.title}</h3>
                        <button className='border-sky-400 border-2 mt-3 bg-cyan-100 shadow-lg cursor-pointer shadow-black px-2  rounded-xl hover:bg-cyan-200 hover:font-bold disabled:bg-gray-400 disabled:font-extralight disabled:cursor-not-allowed'onClick={()=>handleRemoveFromCart(singleCardItem,true)}>Remove</button>
                    </div>
                </div>

                <div className='flex flex-col align-middle justify-center gap-3'>
                    <h3>${singleCardItem.totalPrice.toFixed(2)}</h3>
                    <h3>Qty: {singleCardItem.quantity}</h3>
                    <div>
                        <button className='border-sky-400 border-1 w-[20px] h-[24px] bg-cyan-100 shadow-lg cursor-pointer shadow-black px-1 mr-3 font-semibold rounded-md hover:bg-cyan-200 hover:font-bold disabled:bg-gray-400 disabled:font-extralight disabled:cursor-not-allowed' onClick={()=>handleRemoveFromCart(singleCardItem,false)}
                            disabled={singleCardItem?.quantity===1}>-</button>
                        <button  className='border-sky-400 border-1 font-semibold w-[20px] h-[24px] bg-cyan-100 shadow-md cursor-pointer shadow-black px-1  rounded-md hover:bg-cyan-200 hover:font-bold disabled:bg-gray-400 disabled:font-extralight disabled:cursor-not-allowed'onClick={()=>handleAddToCart(singleCardItem)}>+</button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartTile