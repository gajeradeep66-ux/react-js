import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
    return (
      <div className='bg-gray-800 text-white h-screen w-full'>
        <Navbar />
        <Hero />
      </div>
    )
}

export default App