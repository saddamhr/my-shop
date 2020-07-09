import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListProduct from './ListProduct'
import useCart from '../../hooks/useCart'

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const { addCartItem } = useCart();

    const fetchProduct = id => fetch('http://localhost:4000/products/' + id).then(res => res.json())

    useEffect(() => {
        (async () => {
            const result = await fetchProduct(productId)
            setProduct(result)
        })();
    }, [productId])

    return (
        <div className="checkout">
            <ListProduct {...product} addCartItem={addCartItem} />
        </div>
    );


};

export default ProductDetails;