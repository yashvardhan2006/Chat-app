import React from 'react'
import SearchBar from './SearchBar'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import useConversation from '../../zustand/useConversation'
const SideBar = () => {
  const {selectedConversation,setselectedConversation}=useConversation()
  const isselected = selectedConversation?._id
  return (
    <div className={`${isselected?"hidden md:flex":""} border-r md:min-h-[450px] min-h-[90vh] w-[70vw] md:w-fit border-slate-500 p-4 flex flex-col`}>
      <SearchBar/>
      <div className='divider px-3'></div>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default SideBar
