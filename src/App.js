import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart'

import data from './data'

import './App.css';

import useCart from './hooks/useCart'

function App() {
  const [products, setProduct] = useState([...data]);
  const [keyword, setKeyword] = useState("");
  const {cartItems, addCartItem, removeCartItem, clearCart} = useCart([], products);

  useEffect(() => {
    const results = data.filter(product => product.title.includes(keyword) || product.brand.includes(keyword));
    setProduct(results);
  }, [keyword]);

  

  return <div className="App">
    <NavBar setKeyword={setKeyword} />
    <ProductList products={products} addCartItem={addCartItem} />
    <Cart cartItems={cartItems} removeCartItem={removeCartItem} clearCart={clearCart} />
  </div>
}

export default App;
