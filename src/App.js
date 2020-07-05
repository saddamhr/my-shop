import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart'

import data from './data'

import './App.css';

function App() {
  const [products, setProduct] = useState([...data]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const results = data.filter(product => product.title.includes(keyword) || product.brand.includes(keyword));
    setProduct(results);
  }, [keyword]);

  return <div className="App">
    <NavBar setKeyword={setKeyword} />
    <ProductList products={products}/>
    <Cart />
  </div>
}

export default App;
