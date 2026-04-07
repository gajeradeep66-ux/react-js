import React , { useState } from 'react'

const Numbers = () => {

    const [num, setNum] = useState(0)

    const dataChange = () => {
        // Batch update
        setNum(prev=>(prev + 1))
        setNum(prev=>(prev + 1))
        setNum(prev=>(prev + 1))
    }

    return (
        <div className='num'>
            <h1>{num}</h1>
            <button onClick={dataChange}>Click me</button>
        </div>
    )
}

export default Numbers