import { useEffect, useState } from "react"
import toast from "react-hot-toast"
const useGetConversation = () => {
    const [loading, setloading] = useState(false)
    const [Conversations, setConversations] = useState([])
    useEffect(() => {
        const getconversation = async () => {
            setloading(true)
            try {
                const res = await fetch("/api/user")
                const data = await res.json()
                if (data.error) {
                    throw new Error(error.message)
                }
               
                setConversations(data)

            } catch (error) {
                toast.error(error.message)
            } finally {
                setloading(false)
            }
        }
        getconversation()

    }, [])

    return { loading, Conversations,setConversations }
}

export default useGetConversation




