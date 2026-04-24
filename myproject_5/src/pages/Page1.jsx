import React from 'react'
import { useNavigate } from 'react-router-dom'
import Page2 from './Page2'

const Page1 = () => {
    const navigate = useNavigate()
    
    return (
        <div className=' h-screen w-full flex flex-row items-center justify-start gap-10'>
            <img className="h-100 w-125 ml-25" src="./src/assets/fce5e0a76d3e531201ecd44ca61f9d27ff82e0ae.png" alt="not available" />
            <div className='flex flex-col items-center justify-start gap-4'>
                <h1 className="text-6xl font-black">DICE GAME</h1>
                <button 
                    onClick={() => navigate('/Page2')}
                    className="bg-gray-950 text-white h-10 w-45 rounded ml-48">
                    Play Now
                </button>
            </div>
        </div>
    )
}

export default Page1