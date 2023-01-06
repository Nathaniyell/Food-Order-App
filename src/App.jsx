import React from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

export default function App() {
  return (
    <main>
      <Cart />
    <Header />
      <section>
      <Meals />
      </section>
    </main>
  )
}
