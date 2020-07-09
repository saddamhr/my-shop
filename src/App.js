import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ThemeContext from './ThemeContext';
import { StateProvider } from './store/store'

import './App.css';

const Home = lazy(() => import('./components/Home/Home'));
const Checkout = lazy(() => import('./components/Checkout/Checkout'));
const ProductDetails = lazy(() => import('./components/ProductList/ProductDetails'));
const Cart = lazy(() => import('./components/Cart/Cart'));

function App() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(isDark => !isDark)
  };

  return (
    <StateProvider>
      <ThemeContext.Provider value={{ dark: dark, toggle: toggleDark }}>
        <div className={`App ${dark ? 'dark' : 'light'}`}>
          <Router>
            <NavBar />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path='/checkout' component={Checkout} />
                <Route path='/product/:productId' component={ProductDetails} />
                <Route path='/' component={Home} />
              </Switch>
              <Cart />
            </Suspense>
          </Router>
        </div>
      </ThemeContext.Provider>
    </StateProvider>
  );
};

export default App;
