import React from 'react'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Form from './components/Form'

const App = () => {
  return (
    <div className='text-black'>
      <Navbar />
      <Details />
      <Form />
    </div>
  )
}

export default App