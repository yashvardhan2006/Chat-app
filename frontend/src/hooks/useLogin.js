import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext.jsx"
const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const{setAuthUser}= useAuthContext();
    const login = async ({ username, password }) => {
        // handle input error
           const success = handleinputerror({ username, password })
           if(!success) return
        //fetch
        setLoading(true)
        try {
            console.log("try entered")
            const res = await fetch("/api/auth/login", {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })
            const data = await res.json()
            console.log(data)
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user",JSON.stringify(data)) 
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }
        





    }



    return { loading, login }
};
export default useLogin

function handleinputerror ({ username, password }) {
  if(!username || !password){
    toast.error("All fields are required")
    return false
  }
  return true
}


