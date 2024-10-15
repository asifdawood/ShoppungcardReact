import React, { useContext } from 'react'
import { ShoppingCartContext } from './Context'
import ProductTile from './ProductTile';

const ProductList = () => {

    const {listOfProducts, loading}=useContext(ShoppingCartContext)

    // console.log(listOfProducts);

    if (loading) return <h2>Loading Please wait....</h2>
    
  return (
    <>
    <section>
    <div>
        <div>
            <h2 className='text-center font-bold text-3xl p-16'> Our Featured Products</h2>
        </div>
        <div className='flex gap-6 flex-row flex-wrap justify-center align-middle '>
        {
            listOfProducts && listOfProducts.length>0 ?
            listOfProducts.map((singleProduct)=>
                
                    <ProductTile key={singleProduct.id} singleProduct ={singleProduct}/> 
                      )
                    : <h3>No product Found</h3>
                
        } 
        </div>
    </div>

    </section>
    
    
    
    </>

  )
}

export default ProductList