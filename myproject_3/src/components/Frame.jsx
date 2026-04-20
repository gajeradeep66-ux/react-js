import React from 'react'

const Frame = () => {
    return (
        <div className='flex justify-center items-center h-[85%] w-[80%] ml-35'>
            <div className='flex flex-col justify-start h-[65%] w-1/2'>
                <h1 className='font-extrabold text-4xl'>YOUR FEET DESERVE THE BEST</h1>
                <p className='font-medium text-xs mt-7'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='flex flex-row justify-start mt-5'>
                    <button className='bg-red-500 text-white w-25 '>SHOP NOW</button>
                    <button className='border-2 border-gray-950 text-gray-700 w-25 ml-20'>Category</button>
                </div>
                <div className='mt-5'>
                <p>Also Available On</p>
                </div>
                <div className='flex justify-start gap-5'>
                    <img className='h-7 w-7' src="./src/assets/4331d1d3fe15236a1a9843e35f7b3b8467e998ff.png" alt="logo" />
                    <img className='h-7 w-7' src="./src/assets/9669ba8f4f98c0bc6952e9281673372fcb16cfc0.png" alt="logo" />
                </div>
            </div>
            <div className='h-[65%] w-1/2'>
                <img src="./src/assets/ccd9e7f69d4cbfcf331c69b8e21db35d2e158410.png" alt="logo" />
            </div>
        </div>
    )
}

export default Frame