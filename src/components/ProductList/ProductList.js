import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProductList.css';
import ThemeContext from '../../ThemeContext';
import ListProduct from './ListProduct'
import useCart from '../../hooks/useCart'
import data from '../../data';
import { setProducts } from '../../store/actions';

const ProductList = () => {
    const { addCartItem } = useCart();
    const { dark } = useContext(ThemeContext);
    const { keyword, products } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const results = data.filter(product => product.title.includes(keyword) || product.brand.includes(keyword));
        dispatch(setProducts(results));
    }, [dispatch, keyword]);

    return (
        <div className={`product-list ${dark ? 'dark' : 'light'}`}>
            {products.map(product => (<ListProduct {...product} key={product.id} addCartItem={addCartItem} />))}
        </div>
    );
};

export default ProductList;