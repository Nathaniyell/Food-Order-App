import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import classes from './HeaderCartBtn.module.css'

 const HeaderCartBtn = props =>{
  return <button className={classes.button} onClick={props.onClick}>
  <span className={classes.icon}>
  <FaShoppingCart />
  </span>
  <span>Your Cart</span>
  <span className={classes.badge}>3</span>
  </button>
}
export default HeaderCartBtn