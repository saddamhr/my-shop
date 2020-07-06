import React from "react";
import './Cart.css'

const CartItem = ({ id, title, price, quantity, removeCartItem }) => {
    return (
        <div className="cart-item">
            <button onClick={() => removeCartItem(id)}>X</button>
            <div className="info">
                <span>{title} x {quantity}</span>
                <span>${price}</span>
            </div>
        </div>
    );
};

const Cart = ({ cartItems, removeCartItem, clearCart }) => {
    const total = cartItems.reduce((sum, curr) => (sum + curr.price), 0);
    return (
        <div className="cart">
            <h4>Cart Items</h4>
            <div className="cart-items">
            {cartItems.length === 0 && (<div className="cart-item">
                    <div className="info">
                        <span>Cart is empty</span>
                    </div>
                </div>)}
                {cartItems.length !== 0 && cartItems.map(item => <CartItem {...item} removeCartItem={removeCartItem} />)}
                {cartItems.length !== 0 && 
                <>
                <div className="cart-item">
                    <div className="info">
                        <span>Total</span>
                        <span>{total}</span>
                    </div>
                </div>
                <div className="cart-item">
                    <div className="info">
                        <button style={{color: 'white', backgroundColor: 'red'}} onClick={clearCart}>Cancel</button>
                        <button style={{color: 'white', backgroundColor: 'green'}}>Checkout</button>
                    </div>
                </div>
                </>
                }
            </div>
        </div>
    );
}

export default Cart;