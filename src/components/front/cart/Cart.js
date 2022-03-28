import React from "react";
import './Cart.css';
import logo from '../header/logo.png'

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleClearCart }) => {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

    return (
        <div className='cart-items'>
            <div className='cart-items-header'>Cart Items</div>
            <div className='clear-cart'>
                {cartItems.length >=1 && (
                    <button className='clear-cart-btn' onClick={handleClearCart}>Clear Cart</button>
                )}
            </div>

            {cartItems.length === 0 && (
                <div>
                    <div className='cart-empty'>No items are added to your cart</div>
                    <img src={logo} alt='logo' className='logo-epmty-cart' />  
                </div>
            )}

            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className='cart-item-list'>
                        <img className='cart-item-img' src={item.image} alt={item.name} />
                        <div className='cart-item-title'>{item.name}</div>
                        <div className='cart-item-function'>
                            <button className='add-item' onClick={() => handleAddProduct(item)}>+</button>
                            <button className='remove-item' onClick={() => handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className='cart-item-price'>
                            {item.quantity} x {item.price}:-
                        </div>
                    </div>
                ))}
            </div>

            <div className='cart-total-header'>
                Total Price:  
                <div className='items-total-price'>{totalPrice}:-</div>
            </div>
        </div>
    )
}

export default Cart