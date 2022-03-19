import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './Component/Cart'
import Home from './Component/Home'
import Detail from './Component/Detail'
import Navbar from './Component/Navbar'
import Product from './Component/Product'
import './App.css'
import User from './Component/User'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/detail:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/user' element={<User />} />
      </Routes>

    </>
  )
}

export default App