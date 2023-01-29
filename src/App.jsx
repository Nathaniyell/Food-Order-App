import React, { useState } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

export default function App() {
const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = ()=>{
    setCartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
    <Header onClickCart={showCartHandler} />
      <section>
      <Meals />
      </section>
    </CartProvider>
  )
}
