import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='h-[15%] w-full flex justify-between'>
            <img className="h-10 w-20 mt-3 ml-5" src="./src/assets/45175a94d5389cc06b9d40c646878c60ac4bf7ed.png" alt="logo" />
            <div className='flex flex-row gap-10 p-4 font-semibold'>
                <Link to='/menu'>MENU</Link>
                <Link to='/loacation'>LOCATION</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
            </div>
            <button className='h-7 w-12 bg-red-500 mt-4 mr-5 rounded-xl'>Login</button>
        </div>
    )
}

export default Header