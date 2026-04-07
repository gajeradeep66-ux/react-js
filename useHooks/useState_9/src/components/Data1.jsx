import React, { useState } from 'react'

const Data1 = () => {

    const [num, setNum] = useState(0)

    return (
        <div className='data1'>
            <h1>{num}</h1>
            <button onClick={() => setNum(num + 1)}>Increase</button>
            <button onClick={() => setNum(num - 1)}>Decrease</button>
            <button onClick={() => setNum(num + 5)}>Increase by 5</button>
        </div>
    )
}

export default Data1