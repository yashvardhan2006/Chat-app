import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import { useState,useEffect } from 'react';
import useConversation from '../../zustand/useConversation.jsx';
import { useAuthContext } from '../../context/AuthContext.jsx';
import { IoChevronBackOutline } from "react-icons/io5";
const MessageContainer = () => {
    const {selectedConversation,setselectedConversation}=useConversation()
    const isselected = selectedConversation?._id
    useEffect(() => {
    //clean up 
    return () => setselectedConversation(null)
    }, [setselectedConversation])
    return (
        <div className={`${isselected?"":"hidden md:flex"}  md:min-h-[450px] md:w-[550px] w-[100vw] min-h-[100vh] flex flex-col`}>
            {!selectedConversation ? <NoChatSelected /> :
                <>
                    <div className='bg-slate-500 px-2 py-2 mb-2 flex items-center gap-2'>
                        <IoChevronBackOutline onClick={() => {
                          setselectedConversation(null)
                        }
                        } className='h-6 w-6 md:hidden'/>
                        <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation.fullname}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>}
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    const{authUser} = useAuthContext()
    return (
        <div className='flex items-center justify-center w-full h-full '>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.fullname} ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}

