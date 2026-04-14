import React from 'react'
import { Route, Routes } from 'react-router-dom'
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'
import Four from './pages/Four'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='h-screen w-full bg-gray-900 text-white'>
      <Navbar  />
      <Routes>
        <Route path="/First"  element={<First />}></Route>
        <Route path="/Second" element={<Second />}></Route>
        <Route path="/Third"  element={<Third />}></Route>
        <Route path="/Four"   element={<Four />}></Route>
      </Routes>
    </div>
  )
}

export default App