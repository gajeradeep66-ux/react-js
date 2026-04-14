import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' w-full flex justify-end  px-15 py-10 bg-blue-500'>
            <h1 className='mr-120 mt-3 text-2xl text-nowrap'>Gajera Deep</h1>
            <div className='flex gap-20 bg-blue-900 p-5 underline'>
            <Link to='/First'>First</Link>
            <Link to='/Second'>Second</Link>
            <Link to='/Third'>Third</Link>
            <Link to='/Four'>Four</Link>
        </div>
        </div>
    )
}

export default Navbar