import React from 'react';
import useCart from '../../hooks/useCart'
import data from '../../data'

const Checkout = () => {
    const { total } = useCart(data);
    return (
        <div className="checkout">
            Checkout total: {total}
        </div>
    );
};

export default Checkout;