import React, { useContext, useState } from 'react'
import { ShoppingCartContext } from './Context'

const ImageList = () => {
    const {listOfProducts}=useContext(ShoppingCartContext)
    const [listImages, setlistImages] = useState([])
  return (
    <>
    {listOfProducts.map((singleProduct)=>
        setlistImages(listImages.push(singleProduct.thumbnail))
    
    )
    }
    </>
  )
}

export default ImageList