import React, { useRef, useState } from 'react'
import { Routes, Route } from "react-router-dom";

import "./App.css"
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Product from './components/Product';
import Footer from './components/Footer';
import LoginSignUp from './components/LoginSignUp';
const App = () => {
  const [isShow, setIsShow] = useState(false)
  const footerRef = useRef(null);
  const navbarRef = useRef(null);
  return (
    <>
      {isShow && <LoginSignUp setIsShow={setIsShow}/>}
      <Navbar setIsShow={setIsShow} footerRef={footerRef} navbarRef={navbarRef}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
      </Routes>
      <Footer footerRef={footerRef} navbarRef={navbarRef}/>
    </>
  )
}

export default App