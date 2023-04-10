import React from 'react'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="App w-screen flex flex-col justify-start items-center overflow-x-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
