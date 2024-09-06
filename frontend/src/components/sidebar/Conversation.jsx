import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext'
const Conversation = ({conversation,lastIdx}) => {
    const {selectedConversation,setselectedConversation}= useConversation()
  const isselected = selectedConversation?._id == conversation._id
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)
  
    return (
        <>
        <div className={`flex gap-4 items-center rounded p-2 py-1 hover:bg-sky-500
            ${isselected ? "bg-sky-500":""}`}
            onClick={() => {setselectedConversation(conversation)}}
            >
            <div className={`online ${isOnline?"online":""} `}>
                <div className="image w-12 rounded-full relative">
                    <img className='text-white border rounded-full border-gray-400 relative'
       
                        src={conversation.profilepic}
                        alt=''
                    />
                    {isOnline?<div className='h-3 w-3 bg-green-500 rounded-full absolute top-1 right-0'></div>:null}
                </div>
            </div>
            <div className=" flex flex-1 flex-col ">
                <div className='flex  gap-3 justify-between'>
                    <p className=" text-white">{conversation.fullname}</p>
                    <span className="">{isselected}</span>
                </div>
            </div>
            
        </div>
            {!lastIdx&&<div className='divider   my-0 py-0 h-1' />}
            </>
    )
}

export default Conversation
