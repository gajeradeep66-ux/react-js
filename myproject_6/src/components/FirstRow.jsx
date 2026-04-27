import React from 'react'

const FirstRow = () => {
    return (
        <div>
            <div className='absolute inset-0 flex flex-row gap-10 mt-13 justify-evenly'>
                <div className='backdrop-brightness-75 h-40 w-85 rounded-2xl flex flex-row gap-8'>
                    <img className='absolute h-30 w-30 flex mt-5 rounded-full ml-2' src="https://i.pinimg.com/736x/af/c9/6b/afc96b705be359fec3286b1fbd0b3ce7.jpg" alt="no image" />
                    <div className='flex flex-col ml-35'>
                        <h1 className='font-semibold text-lg mt-2'>GUJARATI THALI</h1>
                        <p className='text-xs mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut est corporis nisi! Ipsum necessitatibus temporibus.</p>
                        <button className='bg-red-500 h-6 w-20 rounded mt-2 ml-25'>$5.00</button>
                    </div>
                </div>
                <div className='backdrop-brightness-75 h-40 w-85 rounded-2xl'>
                    <img className='absolute h-30 w-30 flex mt-5 rounded-full ml-2' src="https://i.pinimg.com/control1/1200x/00/f3/cb/00f3cb443515c43bbadb522e71fd3636.jpg" alt="no image" />
                    <div className='flex flex-col ml-35'>
                        <h1 className='font-semibold text-lg mt-2'>PAV BHAJI</h1>
                        <p className='text-xs mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut est corporis nisi! Ipsum necessitatibus temporibus.</p>
                        <button className='bg-red-500 h-6 w-20 rounded mt-2 ml-25'>$1.50</button>
                    </div>
                </div>
                <div className='backdrop-brightness-75 h-40 w-85 rounded-2xl'>
                    <img className='absolute h-30 w-30 flex mt-5 rounded-full ml-2' src="https://i.pinimg.com/control1/1200x/7f/6d/3e/7f6d3ebdca842e61864b698a277c5418.jpg" alt="no image" />
                    <div className='flex flex-col ml-35'>
                        <h1 className='font-semibold text-lg mt-2'>DHOSA</h1>
                        <p className='text-xs mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut est corporis nisi! Ipsum necessitatibus temporibus.</p>
                        <button className='bg-red-500 h-6 w-20 rounded mt-2 ml-25'>$2.50</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstRow