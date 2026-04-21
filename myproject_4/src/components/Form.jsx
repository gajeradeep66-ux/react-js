import React from 'react'
import { MessageSquareText } from 'lucide-react'
import { Phone } from 'lucide-react'
import Photo from '../page/Photo'

const Form = () => {

    function handleSubmit(e) {
        e.preventDefault();
        alert("Form submitted");
    }

    function btnClicked(e) {
        e.preventDefault();
        alert("Button is Clicked");
    }

    return (
        <div className='flex h-full w-full'>
            <div className='mt-5 ml-32 w-1/2'>
                <div className='flex flex-row justify-start gap-10'>
                    <button onClick={btnClicked} className='bg-gray-950 text-white flex flex-row h-8 w-40 p-1 rounded'>
                        <div><MessageSquareText className='h-5 ml-1 mt-0.5'/></div>
                        <div className='text-xs font-semibold mt-1 ml-1'>VIA SUPPORT CHAT</div>
                    </button>
                    <button onClick={btnClicked} className='bg-gray-950 text-white flex flex-row h-8 w-40 p-1 rounded'>
                        <div><Phone  className='h-5 ml-8 mt-0.5'/></div>
                        <div className='text-xs font-semibold mt-1 ml-1'>VIA CALL</div>
                    </button>
                </div>
                <div>
                    <button onClick={btnClicked} className='text-black flex flex-row h-8 w-90 border-2 p-1 rounded mt-3'>
                        <div><MessageSquareText className='h-5 ml-24 mt-0.5'/></div>
                        <div className='text-xs font-semibold mt-1 ml-1'>VIA EMAIL FORM</div>
                    </button>
                </div>

                <div className='mt-5 ml-3'>
                    <p className='absolute text-xs ml-6 bg-white w-8'>Name</p>
                    <input className='h-6 w-84 border-gray-600 border-2 mt-2' type='text'/>
                </div>
                <div className='mt-3 ml-3'>
                    <p className='absolute text-xs ml-6 bg-white w-9'>E-Mail</p>
                    <input className='h-6 w-84 border-gray-600 border-2 mt-2' type='email'/>
                </div>
                <div className='mt-3 ml-3'>
                    <p className='absolute text-xs ml-6 bg-white w-6'>Text</p>
                    <textarea className='w-84 border-gray-600 border-2 mt-2' type='text' rows='3'/>
                </div>

                <button onClick={handleSubmit} className='bg-gray-950 text-white h-8 w-40 ml-47 rounded'>
                        <div className='text-xs font-semibold mt-1 ml-1'>SUBMIT</div>
                </button>
            </div>

            <Photo />
        </div>
    )
}

export default Form