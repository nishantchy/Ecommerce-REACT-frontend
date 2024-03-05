import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import ProductView from '../pages/ProductView'
import Cart from '../pages/Cart'
const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/productdetails/:productId' element={<ProductView/>}></Route>
        <Route path='/cart/' element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default MyRoutes
