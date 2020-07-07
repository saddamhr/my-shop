import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import useCart from './hooks/useCart';
import ThemeContext from './ThemeContext';

import data from './data'

import './App.css';

function App() {
  const [products, setProduct] = useState([...data]);
  const [keyword, setKeyword] = useState("");
  const [dark, setDark] = useState(false);
  const { cartItems, addCartItem, removeCartItem, clearCart } = useCart([], products);

  const toggleDark = () => {
    setDark(isDark => !isDark)
  }

  useEffect(() => {
    const results = data.filter(product => product.title.includes(keyword) || product.brand.includes(keyword));
    setProduct(results);
  }, [keyword]);



  return (
    <ThemeContext.Provider value={{dark: dark, toggle: toggleDark }}>
      <div className={`App ${dark ? 'dark' : 'light'}`}>
        <NavBar setKeyword={setKeyword} />
        <ProductList products={products} addCartItem={addCartItem} />
        <Cart
          cartItems={cartItems}
          removeCartItem={removeCartItem}
          clearCart={clearCart}
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
