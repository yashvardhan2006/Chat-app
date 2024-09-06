import React, { useState } from 'react'
import {BsSend} from "react-icons/bs"
import useSendMessage from '../../hooks/useSendMessage.js'
const MessageInput = () => {
	const {loading,sendmessage} = useSendMessage()
    const [input, setinput] = useState({message:""})
	const handlesubmit = async(e) => {
		e.preventDefault();
		
		await sendmessage(input)
		setinput({message:""})
	}
	
  return (
    <form onSubmit={handlesubmit} className='px-4 my-3'>
 			<div className='w-full relative'>
 				<input value={input.message} onChange={(e) => {setinput({...input,message:e.target.value})
				  
				}
				}
 					type='text'
 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
 					placeholder='Send a message'
 				/>
 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
 				{loading?<span className='loading loading-spinner'></span>:<BsSend className='text-white' />}
 				</button>
 			</div>
 		</form>
  )
}

export default MessageInput
