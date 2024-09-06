import useConversation from '../zustand/useConversation.jsx'
import { useState } from 'react'
import toast from 'react-hot-toast'
const useSendMessage = () => {
    const {messages, setmessages, selectedConversation }= useConversation()
    const [loading, setloading] = useState(false)
   const sendmessage = async({message}) => {
    if(!selectedConversation?._id){
        toast.error("no conversation selected")
    }
    setloading(true)
     try {
        const res = await fetch(` /api/messages/send/${selectedConversation._id}`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({message})
        })
        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        setmessages([...messages,data])
        console.log(data)

     } catch (error) {
        toast.error(error.message)
     } finally{
        setloading(false)
     }
   }
   return {loading, sendmessage}
}

export default useSendMessage
