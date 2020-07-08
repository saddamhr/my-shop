import React, { useEffect, useContext } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Cart from '../../components/Cart/Cart';
import useCart from '../../hooks/useCart';
import data from '../../data'
import { store } from '../../store';


const Home = () => {
    const { state: { keyword, products }, dispatch } = useContext(store);
    const { cartItems, addCartItem, removeCartItem, clearCart } = useCart();

    useEffect(() => {
        const results = data.filter(product => product.title.includes(keyword) || product.brand.includes(keyword));
        dispatch({ type: "SET_PRODUCTS", payload: results });
    }, [dispatch, keyword]);

    return (
        <>
            <ProductList products={products} addCartItem={addCartItem} />
            <Cart
                cartItems={cartItems}
                removeCartItem={removeCartItem}
                clearCart={clearCart}
            />
        </>
    );
};

export default Home;