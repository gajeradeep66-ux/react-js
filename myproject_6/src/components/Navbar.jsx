import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-col justify-start h-[25%] w-full'>
            <div className='flex flex-row justify-start mt-8'>
                <h1 className='font-bold text-3xl ml-25'>F<span className='text-red-500'>oo</span>dy Z<span className='text-red-500'>o</span>ne</h1>
                <input className='border-1 rounded border-orange-600 ml-170 h-10 w-50' type="text" placeholder='  Search Food...'/>
            </div>
            <div className='flex flex-row justify-start gap-4 mt-6 ml-115'>
                <button className='bg-red-500 h-8 w-10 rounded'>All</button>
                <button className='bg-red-500 h-8 w-23 rounded'>Breakfast</button>
                <button className='bg-red-500 h-8 w-17 rounded'>Lunch</button>
                <button className='bg-red-500 h-8 w-17 rounded'>Dinner</button>
            </div>
        </div>
    )
}

export default Navbar

//h-[75%] w-full opacity-[0.3]