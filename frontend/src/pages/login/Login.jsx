import React from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import { useState } from 'react'
const Login = () => {
    const [inputs, setinputs] = useState({username:"",password:""})
    const {loading,login}= useLogin()
    const handlesubmit = async(e) => {
        e.preventDefault();
      console.log(inputs)
        await login(inputs)

    }
    
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

            <div className='w-full  p-6 rounded-lg shadow-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                    <span className='text-blue-500'> Chat app</span>
                </h1>
                <form onSubmit={handlesubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base text-gray-300'>Username</span>
                        </label>
                        <input value={inputs.username} onChange={(e) => {setinputs({...inputs,username:e.target.value})}} type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base text-gray-300'>Password</span>
                        </label>
                        <input value={inputs.password} onChange={(e) => {setinputs({...inputs,password:e.target.value})}} type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' />
                    </div>
                    <Link to={'/signup'} className='hover:underline hover:text-blue-600 mt-2 inline-block text-gray-300' href="">Don't have an account?</Link>
                    <div>
 						<button className='btn btn-block btn-sm mt-2'>Login</button>
					</div>
                </form>
            </div>
        </div>

    )
}

export default Login
