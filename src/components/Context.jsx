

//create the Context
//Provide the state to the contest
// Wrap context in root component
//consume the contest using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null)


function ShoppinCartProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [productDetails, setProductDetails] = useState([])
    const [cartItems, setCartItems] = useState([])
    
   
    const navigate = useNavigate()
    const fetchListOfProducts = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            // console.log(data);
            if (data && data?.products) {
                setListOfProducts(data.products)
                
                setLoading(false)
            }
        } catch (err) {
            console.error(err);
        };
    };
    
  
    

    function handleAddToCart(productDetails) {
        // console.log('Product to be added',productDetails);
        let copyExistingCartitems = [...cartItems]
        const findIndexofCurrentitem = copyExistingCartitems.findIndex((cartItem) => cartItem.id == productDetails.id)
        // console.log('Before adding copyExistingCartitems', copyExistingCartitems);
        // console.log(findIndexofCurrentitem);
        if (findIndexofCurrentitem === -1) {
            copyExistingCartitems.push({
                ...productDetails,
                quantity: 1,
                totalPrice: productDetails.price
            })
        } else {
            copyExistingCartitems[findIndexofCurrentitem] = {
                ...copyExistingCartitems[findIndexofCurrentitem],
                quantity: copyExistingCartitems[findIndexofCurrentitem].quantity + 1,
                totalPrice: (copyExistingCartitems[findIndexofCurrentitem].quantity + 1) *
                    copyExistingCartitems[findIndexofCurrentitem].price
            }
            // console.log('Reached here');

        }
        // console.log('copyExistingCartitems', copyExistingCartitems);
        setCartItems(copyExistingCartitems)
        localStorage.setItem('cartItems', JSON.stringify(copyExistingCartitems))
        navigate('/cart')
    }

    function handleRemoveFromCart(productDetails, isFullyRemove) {
        let copyExistingCartitems = [...cartItems]

        const findIndexOfCurrentCartItem = copyExistingCartitems.findIndex((item) => item.id === productDetails.id)
        if (isFullyRemove) {
            copyExistingCartitems.splice(findIndexOfCurrentCartItem)
        } else {
            copyExistingCartitems[findIndexOfCurrentCartItem] = {
                ...copyExistingCartitems[findIndexOfCurrentCartItem],
                quantity: copyExistingCartitems[findIndexOfCurrentCartItem].quantity - 1,
                totalPrice: (copyExistingCartitems[findIndexOfCurrentCartItem].quantity - 1) *
                    copyExistingCartitems[findIndexOfCurrentCartItem].price,
            }
        }

        localStorage.setItem('cartItems', JSON.stringify(copyExistingCartitems))
        setCartItems(copyExistingCartitems)
    }
    useEffect(() => {
        fetchListOfProducts();
        // fetchImages()
        localStorage.getItem('cartItems') ?
            setCartItems(JSON.parse(localStorage.getItem('cartItems'))) :
            []
    }, [])



    return <ShoppingCartContext.Provider value={{ listOfProducts, loading, setLoading, setProductDetails, productDetails, handleAddToCart, cartItems, handleRemoveFromCart  }}>
        {children}
    </ShoppingCartContext.Provider>

}

export default ShoppinCartProvider;