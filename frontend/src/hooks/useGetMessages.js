import { useState, useEffect } from "react"
import useConversation from "../zustand/useConversation"
const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setmessages, selectedConversation } = useConversation()
    useEffect(() => {
        const getmessages = async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api/messages/${selectedConversation._id}`)
                const data = await res.json()
                if (data.error) {
                    throw new Error(data.error)
                }
               
                setmessages(data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        if (selectedConversation?._id) getmessages()
  
  }, [selectedConversation?._id, setmessages])


    return { loading, messages }
}

export default useGetMessages
