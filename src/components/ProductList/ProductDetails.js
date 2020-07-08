import React from 'react';
import { useParams } from 'react-router-dom';
import ListProduct from './ListProduct'
import data from '../../data'

const ProductDetails = () => {
    const { productId } = useParams();
    const product = data.find(p => p.id === parseInt(productId));
    return (
        <div className="checkout">
            <ListProduct {...product}/>
        </div>
    );


};

export default ProductDetails;