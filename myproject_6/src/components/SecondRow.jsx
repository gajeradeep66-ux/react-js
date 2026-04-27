import React from 'react'

const SecondRow = () => {
    return (
        <div>
            <div className='absolute inset-0 flex flex-row gap-10 mt-62 justify-evenly'>
                <div className='backdrop-brightness-75 h-40 w-85 rounded-2xl flex flex-row gap-8'>
                    <img className='absolute h-30 w-30 flex mt-5 rounded-full ml-2' src="https://i.pinimg.com/control1/1200x/61/d8/7e/61d87e840c11e03ee95d24d2b18d2b13.jpg" alt="no image" />
                    <div className='flex flex-col ml-35'>
                        <h1 className='font-semibold text-lg mt-2'>PANIR NAN</h1>
                        <p className='text-xs mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut est corporis nisi! Ipsum necessitatibus temporibus.</p>
                        <button className='bg-red-500 h-6 w-20 rounded mt-2 ml-25'>$4.00</button>
                    </div>
                </div>
                <div className='backdrop-brightness-75 h-40 w-85 rounded-2xl'>
                    <img className='absolute h-30 w-30 flex mt-5 rounded-full ml-2' src="https://i.pinimg.com/1200x/d4/d9/92/d4d99263af05d7dd01dbe7a6a295b27b.jpg" alt="no image" />
                    <div className='flex flex-col ml-35'>
                        <h1 className='font-semibold text-lg mt-2'>IDALI SABHAR</h1>
                        <p className='text-xs mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut est corporis nisi! Ipsum necessitatibus temporibus.</p>
                        <button className='bg-red-500 h-6 w-20 rounded mt-2 ml-25'>$3.00</button>
                    </div>
                </div>
                <div className='backdrop-brightness-75 h-40 w-85 rounded-2xl'>
                    <img className='absolute h-30 w-30 flex mt-5 rounded-full ml-2' src="https://i.pinimg.com/control1/1200x/1e/a7/fc/1ea7fca510708ed25f97b2ca63809d32.jpg" alt="no image" />
                    <div className='flex flex-col ml-35'>
                        <h1 className='font-semibold text-lg mt-2'>PIZZA</h1>
                        <p className='text-xs mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut est corporis nisi! Ipsum necessitatibus temporibus.</p>
                        <button className='bg-red-500 h-6 w-20 rounded mt-2 ml-25'>$6.00</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondRow