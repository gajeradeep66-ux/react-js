import React from 'react'
import FirstRow from './FirstRow'
import SecondRow from './SecondRow'

const Hero = () => {
    return (
        <div className='relative h-[75%] w-full'>
            <img className='h-full w-full opacity-[0.3]' src="./src/assets/8ec18041d1c7823a13dc2a1623370d1198d5d263.jpg" alt="no image" />

            <FirstRow />
            <SecondRow />
        </div>
    )
}

export default Hero