import React, { useContext } from 'react';
import './ProductList.css';
import ThemeContext from '../../ThemeContext';
import ListProduct from './ListProduct'


const ProductList = ({ products, addCartItem }) => {
    const { dark } = useContext(ThemeContext);

    return (
        <div className={`product-list ${dark ? 'dark' : 'light'}`}>
            {products.map(product => <ListProduct {...product} key={product.id} addCartItem={addCartItem} />)}
        </div>
    )
}

export default ProductList;