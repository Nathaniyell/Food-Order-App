import React, { useReducer } from "react";
import CartContext from './card-context'

const defaultCartState = {
  items: [],
  totalAmount:0
}

const cartReducer =(state, action)=>{
  if(action.type === 'ADD-ITEM'){
    const updatedItems = state.items.concat(action.item) //.concat method returns a new array each time an item is added instead of pushing it traditionally into the already existing array
    const updatedTotalAmnt = state.totalAmount + action.item.price * action.item.amount
    return{
      items: updatedItems,
      totalAmount: updatedTotalAmnt
    }
  }
  
  return defaultCartState
}
const CartProvider= props=>{
const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState)
  
  const addItemHandler = item =>{
    dispatchCartAction({
      type:"ADD-ITEM",
      item: item
    })
  }

  
  const removeItemHandler = id =>{
     dispatchCartAction({
      type:"REMOVE-ITEM",
      id: id
    })
  }

  
 const cartContext = {
    items:cartState.items,
    totalAMount: cartState.totalAmount,
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