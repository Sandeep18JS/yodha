import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import React from 'react'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/contactus' element={<ContactUs />} />
    </Routes>
  )
}