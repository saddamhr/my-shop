import React, { useState } from 'react';
import useCart from '../../hooks/useCart'
import data from '../../data'

const Checkout = () => {
    const [address, setAddress] = useState("");
    const { total, clearCart } = useCart(data);

    const handleChange = (e) => {
        setAddress(e.target.value);
    };

    return (
        <div className="checkout">
            <h3>Checkout total: {total}</h3>
            <div>
                {total > 0 ? (<div className="cart-item">
                    <div className="info">
                        <span><input placeholder="Address" onChange={handleChange} /></span>
                        <button style={{ color: 'white', backgroundColor: !address ? 'gray' : 'green' }}
                            disable={`${!address}`}
                            onClick={() => address && clearCart()}
                        >
                            Checkout</button>
                    </div>
                </div>) : ('Cart is Empty')}
            </div>
        </div>
    );
};

export default Checkout;