import React from "react";
import CartContext from './card-context'

const CartProvider= props=>{
  const addItemHandler = item =>{}
  const removeItemHandler = id =>{}
  cartContext = {
    items: [],
    totalAMount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }


  
  return(
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider