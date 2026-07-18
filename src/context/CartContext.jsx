import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider(props) {
  const [myCartItems, setMyCartItems] = useState([]);

  function addNewItemToCart(product) {
    let itemAlreadyInCart = false;
    
    // Check if item exists using a standard map
    let updatedCart = myCartItems.map(function(item) {
      if (item.id === product.id) {
        itemAlreadyInCart = true;
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });

    // If it wasn't found, push a new one
    if (itemAlreadyInCart === false) {
      updatedCart.push({ ...product, qty: 1 });
    }

    setMyCartItems(updatedCart);
  }

  function changeItemQuantity(productId, amountToChange) {
    let newCart = [];
    
    for (let i = 0; i < myCartItems.length; i++) {
      let currentItem = myCartItems[i];
      
      if (currentItem.id === productId) {
        currentItem.qty = currentItem.qty + amountToChange;
      }
      
      // Only keep the item if quantity is greater than 0
      if (currentItem.qty > 0) {
        newCart.push(currentItem);
      }
    }
    
    setMyCartItems(newCart);
  }

  // Calculate total using a standard loop instead of .reduce()
  let totalPrice = 0;
  for (let i = 0; i < myCartItems.length; i++) {
    totalPrice = totalPrice + (myCartItems[i].price * myCartItems[i].qty);
  }

  return (
    <CartContext.Provider value={{ cart: myCartItems, addToCart: addNewItemToCart, updateQty: changeItemQuantity, cartTotal: totalPrice }}>
      {props.children}
    </CartContext.Provider>
  );
}