import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from '../../zustand/useConversation.jsx';
import useGetConversation from '../../hooks/useGetConversation.js';
const SearchBar = () => {
  const [search, setSearch] = useState("")
  const {setselectedConversation}=useConversation()
  const {Conversations} = useGetConversation()
  const handlesubmit = (e) => {
    e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = Conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));
console.log(conversation)
		if (conversation) {
			setselectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
  }
  
  return (
    <form onSubmit={handlesubmit} action="" className='flex items-center gap-2'>
        <input type='text' value={search} onChange={(e) => {setSearch(e.target.value)}}
         placeholder='Search...' className=' input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white' >
        <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default SearchBar
