import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/Page2' element={<Page2 />} />
      </Routes>
    </div>
  )
}

export default App