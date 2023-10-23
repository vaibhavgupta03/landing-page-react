import { useState } from 'react'

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 p-4 text-3xl font-semibold'>React Router</h1>
      
      <Header />
      <Home />
      <Footer/>
    </>
  )
}

export default App
