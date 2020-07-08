import React, {useState, useEffect} from 'react';
import ProductList from '../../components/ProductList/ListProduct';
import Cart from '../../components/Cart/Cart';
import useCart from '../../hooks/useCart';
import data from '../../data'

const Home = ({ keyword }) => {
    const [products, setProduct] = useState([...data]);
    const { cartItems, addCartItem, removeCartItem, clearCart } = useCart([], products);

    useEffect(() => {
        const results = data.filter(product => product.title.includes(keyword) || product.brand.includes(keyword));
        setProduct(results);
    }, [keyword]);

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