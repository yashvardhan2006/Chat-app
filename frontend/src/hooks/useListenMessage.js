import React from 'react'
import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation'
import notificationsound from "../assets/sound/notification.mp3"
const useListenMessage = () => {
  const {socket} = useSocketContext()
  const {messages,setmessages}= useConversation()
  useEffect(() => {
      socket?.on("newMessage",(newMessage) => {
        const sound = new Audio(notificationsound)
        sound.play()
        console.log("usemessages trigger")
      setmessages([...messages,newMessage])
     
    }
    )
  
    return () => socket?.off("newMessage")
  }, [socket,setmessages,messages])
  
}

export default useListenMessage
