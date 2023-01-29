import React, { useContext } from 'react'
import CartContext from '../../store/card-context' //to access the original states
import {FaShoppingCart} from 'react-icons/fa'
import classes from './HeaderCartBtn.module.css'

 const HeaderCartBtn = props =>{
const cardCtx = useContext(CartContext) //save properties of the context object here to be able to access those properties in this component
   const numberOfCartItems = cardCtx.items.reduce((strtVal, item)=>{
     return strtVal + item.amount
   }, 0)//Thr reduce function takes in two arguments, a function and also a starting value. the function also takes in two arguments, a=the startingValue and
  return <button className={classes.button} onClick={props.onClick}>
  <span className={classes.icon}>
  <FaShoppingCart />
  </span>
  <span>Your Cart</span>
  <span className={classes.badge}>{numberOfCartItems}</span>
  </button>
}
export default HeaderCartBtn