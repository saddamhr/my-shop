import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart'
import './App.css';

function App() {
  return <div className="App">
    <NavBar />
    <ProductList />
    <Cart />
  </div>
}

export default App;
