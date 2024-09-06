import {Navigate, Route,Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import "./App.css";
import Home from './pages/home/home.jsx'
import { useAuthContext } from "./context/AuthContext.jsx";
function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="bg-[url('/bg.png')] h-screen w-screen flex items-center justify-center bg-cover bg-center  ">
   <Routes>
    <Route path='/' element={authUser?<Home/>:<Navigate to='/login'/>}></Route>
    <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />}></Route>
    <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />}></Route>
   </Routes>
   <Toaster/>
 
</div>

  )
}

export default App
