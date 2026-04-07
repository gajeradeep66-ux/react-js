import React, { useState } from 'react'
import Data from './components/Data'
import Numbers from './components/Numbers'

const App = () => {

  const [num, setNum] = useState({user:'Deep', age:21})

  const btnChange = () => {
    // const newNum = {...num}
    // newNum.age = num.age + 1 
    // newNum.user = 'Jay'
    // setNum(newNum)

    setNum(prev => ({...prev, age: 25}))
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnChange}>Click</button>

      <Data />
      <Numbers />
    </div>
  )
}

export default App