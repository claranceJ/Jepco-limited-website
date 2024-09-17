import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className=' min-h-screen bg-accent font-sans'>
      < Navbar/>
      <Home/>
      <Footer />
     
    </div>
  )
}

export default App
