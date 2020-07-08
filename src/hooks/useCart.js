import { useContext } from 'react'
import { store } from '../store'

const useCart = (products) => {
  const { state: { cartItems }, dispatch } = useContext(store)

  const setCartItems = (items) => {
    dispatch({ type: "SET_CART_ITEMS", payload: items });
  };
  const addCartItem = (id) => {
    const item = products.find(product => product.id === id);
    const itemIndex = cartItems.findIndex(currentItem => currentItem.id === id);
    if (itemIndex === -1) {
      setCartItems([
        ...cartItems,
        {
          ...item,
          quantity: 1
        }
      ]);
    } else {
      setCartItems(cartItems.map(currentItem => currentItem.id === id ? ({
        ...item,
        quantity: parseInt(currentItem.quantity) + 1
      }) : currentItem));
    }
  };

  const removeCartItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    const res = window.confirm("Are you sure to perform the action?");
    if (res) {
      setCartItems([]);
    }
  };

  const total = cartItems.reduce(
    (sum, curr) => (sum + curr.price * curr.quantity), 0
  );

  return {
    total,
    cartItems,
    addCartItem,
    removeCartItem,
    clearCart
  }
};

export default useCart;