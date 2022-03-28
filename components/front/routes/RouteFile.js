import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../products/Products";
import Cart from "../cart/Cart";
import SingleProduct from "../products/SingleProduct";

const RouteFile = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, handleClearCart }) => {
    return (
        <div>
            <Routes>
                <Route path='/products/:productId' element={<SingleProduct productItems={productItems}/>}></Route>
                <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>} exact></Route>
                <Route path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleClearCart={handleClearCart}/>} exact></Route>
            </Routes>
        </div>
    )
}

export default RouteFile; 