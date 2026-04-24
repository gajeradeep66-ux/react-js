import React , { useState } from 'react'
import dice1 from '../assets/Screenshot 2026-04-24 003445.png'
import dice2 from '../assets/Screenshot 2026-04-24 003459.png'
import dice3 from '../assets/Screenshot 2026-04-24 003512.png'
import dice4 from '../assets/Screenshot 2026-04-24 003530.png'
import dice5 from '../assets/Screenshot 2026-04-24 003543.png'
import dice6 from '../assets/Screenshot 2026-04-24 003556.png'

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]

const Hero = ({ selected, setShowError, setCount }) => {

    const [select, setSelect] = useState(false)
    const [diceIndex, setDiceIndex] = useState(0)

    function handleClick() {
        setSelect(!select)
    }

    const handleDiceClick = () => {
        if (selected === null) {
            setShowError(true)
            setTimeout(() => setShowError(false), 3000)
            return
        }
        const random = Math.floor(Math.random() * diceImages.length)
        setDiceIndex(random)
        const diceNumber = random + 1
        if (selected === diceNumber) {
            setCount(prev => prev + diceNumber)
        } else {
            setCount(prev => prev - 1)
        }
    }

    return (
        <div>
            <div className='h-[75%] w-[50%] flex flex-col justify-start  ml-135 mt-10'>
                <button onClick={handleDiceClick}>
                    <img className="w-40 h-40" src={diceImages[diceIndex]} alt="dice" />
                </button>

                <h2 className="text-lg font-bold">Click on Dice to Roll</h2>

                <div className='flex flex-col ml-3'>
                    <button onClick={() => setCount(0)} className='border-2 h-8 w-32 rounded mt-2'>Reset Score</button>
                    <button 
                        onClick={handleClick}
                        className='h-8 w-32 rounded bg-black text-white mt-2'
                    >Show Rules</button>
                </div>
            </div>

                <div className={`flex flex-col bg-orange-100 h-36 w-152 ml-80 mt-4 ${select ? 'block' : 'hidden'}`}>
                        <div className='ml-5'>
                            <h1 className='font-bold text-lg py-2'>How to play dice game</h1>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm'>Select any number</p>
                                <p className='text-sm'>Click on dice image</p>
                                <p className='text-sm'>After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                                <p className='text-sm'>If you get wrong guess then 1 point will be dedcuted </p>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default Hero