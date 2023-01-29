import React, { useState } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

export default function App() {
const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = ()=>{
    setCartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  
  return (
    <main>
      {cartIsShown && <Cart />}
    <Header onClickCart={showCartHandler} />
      <section>
      <Meals />
      </section>
    </main>
  )
}
