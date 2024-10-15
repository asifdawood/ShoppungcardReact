import { Route, Routes } from "react-router-dom"
import ProductList from "./components/ProductList"
import CartList from "./components/CartList"
import ProductDetails from "./components/ProductDetails"
import Home from "./components/Home"


function App() {
  

  return (
    <>
    
      <Routes>
<Route path="/" element={<Home/>} />
<Route path="/products" element={<ProductList/>} />
<Route path='/cart' element={<CartList/>}/>
<Route path='/product-details/:id' element={<ProductDetails/>}/>

      </Routes>
    </>
  )
}

export default App
