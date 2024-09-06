import React from 'react'
import { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useListenMessage from '../../hooks/useListenMessage'

const Messages = () => {
  const { loading, messages } = useGetMessages()
  useListenMessage();
  const lastMessageRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className='flex-1 px-4 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message, idx) => (
        <div key={message._id} ref={lastMessageRef}>

          <Message message={message} />
        </div>
      )
      )}
      {loading && [...Array(7)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center text-gray-100'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages
