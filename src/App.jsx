import React from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

export default function App() {
  return (
    <main>
    <Header />
      <section>
      <Meals />
      </section>
    </main>
  )
}
