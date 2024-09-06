import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'



const Conversations = () => {
  const { loading, Conversations } = useGetConversation()


  return (
    <div className='py-2 flex flex-col overflow-auto' >
      {Conversations.map((conversation,idx) => (
        <Conversation key={conversation._id}
          conversation={conversation} 
          lastIdx={idx===Conversations.length-1}
        />
      )
      )}
      {loading ? (<span className='loading loading-spinner'></span>) : null}

    </div>
  )
}

export default Conversations



