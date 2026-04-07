import React, { useState } from 'react'

const Data = () => {

    const [num, setNum] = useState([10,20,30,40,50])

    const btnClick = () => {
        const newNum =[...num]
        newNum.push(100) 
        setNum(newNum)
    }

    return (
        <div className='data'>
            <h1>{num}</h1>
            <button onClick={btnClick}>Click me</button>
        </div>
    )
}

export default Data