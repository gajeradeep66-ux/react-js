import React from 'react'


const Navbar = ({ selected, setSelected, showError, count }) => {

    const handleSelect = (num) => {
        setSelected(num)
    }

    return (
        <div className=' h-[25%] w-full flex flex-row mt-5'>
            <div className='flex flex-col ml-10'>
                <h1 className='font-semibold text-4xl ml-7'>{count}</h1>
                <h6 className='text-sm'>Total Score</h6>
            </div>
        
            <div className='flex flex-col ml-190'>
                <p className={`text-red-500 ml-28 ${showError ? 'block' : 'hidden'}`}>You have not select any number</p>
                <div className='flex flex-row gap-5'>
                    {[1,2,3,4,5,6].map((num) => (
                        <button 
                            key={num}
                            onClick={() => handleSelect(num)}
                            className={`border-2 h-10 w-10 rounded ${
                                selected === num 
                                    ? 'bg-black text-white' 
                                    : 'bg-white text-black'
                            }`}
                        >
                            {num}
                        </button>
                    ))}
                </div>
                <h1 className='font-bold ml-56 mt-2'>Select Number</h1>
            </div>
        </div>
    )
}

export default Navbar