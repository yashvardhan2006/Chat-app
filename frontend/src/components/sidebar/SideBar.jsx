import React from 'react'
import SearchBar from './SearchBar'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
const SideBar = () => {
  return (
    <div className='border-r  border-slate-500 p-4 flex flex-col'>
      <SearchBar/>
      <div className='divider px-3'></div>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default SideBar
