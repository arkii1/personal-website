import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="App w-screen flex flex-col justify-start items-center overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="personal-website" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
