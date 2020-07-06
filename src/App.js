import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart'

import data from './data'

import './App.css';

function App() {
  const [products, setProduct] = useState([...data]);
  const [cartItems, setCartItems] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const results = data.filter(product => product.title.includes(keyword) || product.brand.includes(keyword));
    setProduct(results);
  }, [keyword]);

  const addCartItem = (id) => {
    const item = products.find(product => product.id === id);
    setCartItems((items) =>
    {
      const itemIndex = items.findIndex(currentItem => currentItem.id === id);
      if(itemIndex === -1) {
        return [
          ...items, 
          {
            ...item,
            quantity: 1
        }
      ];
      } else {
        return items.map(currentItem => currentItem.id === id ? ({
            ...item,
            quantity: parseInt(currentItem.quantity) + 1
          }) : currentItem);
      }
    });
  };

  const removeCartItem = id => {
    setCartItems((items) => items.filter(item => item.id !== id));
  }

  return <div className="App">
    <NavBar setKeyword={setKeyword} />
    <ProductList products={products} addCartItem={addCartItem} />
    <Cart cartItems={cartItems} removeCartItem={removeCartItem} />
  </div>
}

export default App;
