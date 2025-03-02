// src/contextcomponent/CartContext.js
import React, { createContext, useContext, useState } from 'react';
import { useToast } from '@chakra-ui/react';

// Create a context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const toast = useToast();

  // Function to add item to the cart
  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    toast({
      title: 'Item added successfully.',
      description: 'You can check your item in My Cart.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  // Function to update quantity
  const updateItemQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, Math.min(5, quantity)) } : item
      )
    );
  };

  // Function to remove item from cart
  const removeItemFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, updateItemQuantity, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
