import React, { useContext } from 'react'
import { ShoppingCartContext } from './Context'
import { useNavigate } from 'react-router-dom'
import CartTile from './CartTile'

const CartList = () => {
  const { cartItems } = useContext(ShoppingCartContext)
  const navigate = useNavigate()
  return (
    <>
      
        <h1 className='text-center font-bold text-3xl p-2'>My Cart Page</h1>
        <div className='flex gap-10 justify-center mb-4'>
    <button className='border-sky-400 border-2 bg-cyan-100 shadow-lg shadow-black p-2 rounded-xl hover:bg-cyan-200 hover:font-bold' onClick={()=>navigate('/products')}>Products</button>
    <button className='border-sky-400 border-2 bg-cyan-100 shadow-lg shadow-black p-2 px-6 rounded-xl hover:bg-cyan-200 hover:font-bold' onClick={()=>navigate('/cart')}>Cart</button>
    </div>
        <div className='flex justify-around'>
          <div>
            {
              cartItems?.length ?
                cartItems.map((singleItem) =>
                  <CartTile key={singleItem.id} singleCardItem={singleItem} />
                )

                : <h2>No cart items </h2>
            }
          </div>
          <div>
            <h3 className='mb-3 font-bold'>Order Summary:</h3>
            <ul>
              <p className='mb-3 font-bold'>
                Total : <span>
                  $ {cartItems.reduce((acc, curr) =>
                    acc + curr.totalPrice, 0).toFixed(2)}
                </span>
              </p>
            </ul>
            <div>
              <button className='border-sky-400 border-2 bg-cyan-100 shadow-lg cursor-pointer shadow-black px-2 mr-4 rounded-xl hover:bg-cyan-200 hover:font-bold disabled:bg-gray-400 disabled:font-extralight disabled:cursor-not-allowed'
                disabled={cartItems.length === 0}
              >Check Out</button>
              <button className='border-sky-400 border-2 bg-cyan-100 shadow-lg cursor-pointer shadow-black px-2  rounded-xl hover:bg-cyan-200 hover:font-bold disabled:bg-gray-400 disabled:font-extralight disabled:cursor-not-allowed' onClick={() => navigate('/products')}>Continue Shopping</button>
            </div>
          </div>
        </div>
      

    </>
  )
}

export default CartList