import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ShoppingCartContext } from './Context';


const ProductDetails = () => {
    const { id } = useParams();
    const { setProductDetails, productDetails, loading, setLoading, handleAddToCart, cartItems } = useContext(ShoppingCartContext)
const [imageUrl, setImageUrl] = useState("")
const navigate=useNavigate()


    const fetchProductDetails = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            // console.log(data)
            if (data) {
                setProductDetails(data)
                setImageUrl(data.thumbnail)
                setLoading(false)
            }

        } catch (err) {
            console.error(err);
        };
    };

    useEffect(() => {
        fetchProductDetails()
    }, [id])

    // console.log(productDetails);



    if (loading) return <h2> Loading pleas wait</h2>


    return (
        <>


            <div>

                <h2 className='text-center font-bold text-3xl p-4'>{productDetails.title}</h2>
                <div className='flex gap-10 justify-center mb-10'>
    <button className='border-sky-400 border-2 bg-cyan-100 shadow-lg shadow-black p-2 rounded-xl hover:bg-cyan-200 hover:font-bold' onClick={()=>navigate('/products')}>Products</button>
    <button className='border-sky-400 border-2 bg-cyan-100 shadow-lg shadow-black p-2 px-6 rounded-xl hover:bg-cyan-200 hover:font-bold' onClick={()=>navigate('/cart')}>Cart</button>
    </div>
                <div className='flex justify-center flex-row-reverse gap-6'>
                    <div className='flex flex-col justify-center align-middle '>
                        <div className='text-center pb-6 font-semibold'>
                            <p>${productDetails.price}</p>
                        </div>
                        <div>
                            <button className='border-sky-400 border-2 bg-cyan-100 shadow-lg cursor-pointer shadow-black p-2  rounded-xl hover:bg-cyan-200 hover:font-bold disabled:bg-gray-400 disabled:font-extralight disabled:cursor-not-allowed'
                                disabled={cartItems.findIndex((item) => item.id === productDetails.id) > -1}
                                onClick={() => handleAddToCart(productDetails)}>Add to Cart</button>
                        </div>
                    </div>
                    <div className='shadow-lg mr-10 mb-8  w-[300px] h-[300px]'>
                        <img className="w-full h-full object-contain" src={imageUrl} alt="" />
                    </div>
                    </div>
                    <div className='flex gap-8 justify-center' >

                        {
                            productDetails?.images?.length > 0 ?
                                productDetails.images.map((image) =>
                                    <div className='w-24 h-24 shadow-md' key={image}>
                                        <img  onClick={()=>setImageUrl(image)} src={image} alt="" />
                                    </div>
                                )
                                : null
                        }
                    </div>
                </div>



            </>
            )
}

            export default ProductDetails