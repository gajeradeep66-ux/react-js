import React, { useState } from 'react'
import Data1 from './components/Data1'

const App = () => {

  const [a, seta] = useState(20)
  const [username, setUsername] = useState('Deep')

  function changeData(){
    seta( a + 10 )
    setUsername (username + 'kumar')
  }

  return (
    <div>
      <h2>Value of a is {a} <br /> Value of username is {username}</h2>
      <button onClick={changeData} >Click</button>

      <Data1 />
    </div>
  )
}

export default App