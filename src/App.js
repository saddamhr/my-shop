import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ProductDetails from './components/ProductList/ProductDetails';
import ThemeContext from './ThemeContext';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home'

import './App.css';

function App() {
  const [keyword, setKeyword] = useState("");
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(isDark => !isDark)
  };

  return (
    <ThemeContext.Provider value={{ dark: dark, toggle: toggleDark }}>
      <div className={`App ${dark ? 'dark' : 'light'}`}>
        <Router>
          <NavBar setKeyword={setKeyword} />
          <Switch>
            <Route path='/checkout' component={Checkout} />
            <Route path='/product/:productId' component={ProductDetails} />
            <Route path='/' component={() => <Home keyword={keyword} />} />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
