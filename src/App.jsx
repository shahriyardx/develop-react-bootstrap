import React from 'react'
import Home from './pages/Home'
import AOS from 'aos';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom"

import 'aos/dist/aos.css';
import About from './pages/About';

const App = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} /> 
    </Routes>
  )
}

export default App