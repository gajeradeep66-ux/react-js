import React from 'react'
import { CircleUserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='h-[10%] w-full flex flex-row justify-end bg-gray-950 text-white'>
            <div className='px-170 py-2'>
                <CircleUserRound />
            </div>
            <div className='flex gap-7 px-8 py-3 font-semibold text-sm'>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Navbar