import React from 'react'
import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import { useState } from 'react'
import useSignup from '../../hooks/useSignUp'
const SignUp = () => {
  const [inputs, setInputs] = useState({
		fullname: "",
		username: "",
		password: "",
		confirmpassword: "",
		gender: "",
	});
  const {loading,signup}=useSignup()
  const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};
  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs)
    
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

      <div className='w-full  p-6 rounded-lg shadow-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign
          <span className='text-blue-500'> Chat app</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base text-gray-300'>Full Name</span>
            </label>
            <input value={inputs.fullname} onChange={(e) => {setInputs({...inputs,fullname:e.target.value})}} type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
          </div>

          <div>
            <label className='label p-2 '>
              <span className='text-base text-gray-300 '>Username</span>
            </label>
            <input value={inputs.username} onChange={(e) => {setInputs({...inputs,username:e.target.value})}} type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label'>
              <span className='text-base text-gray-300  '>Password</span>
            </label>
            <input value={inputs.password} onChange={(e) => {setInputs({...inputs,password:e.target.value})}}
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base text-gray-300 '>Confirm Password</span>
            </label>
            <input value={inputs.confirmpassword} onChange={(e) => {setInputs({...inputs,confirmpassword:e.target.value})}}
              type='password'
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10'
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />


          <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-300' href='#'>
            Already have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
