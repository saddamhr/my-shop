import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart'

import data from './data'

import './App.css';

function App() {
  return <div className="App">
    <NavBar />
    <ProductList products={data}/>
    <Cart />
  </div>
}

export default App;
