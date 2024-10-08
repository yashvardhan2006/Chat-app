import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {

  return (
    <div className="flex min-h-[450px] md:h-[550px]  rounded-lg overflow-hidden bg-gray-400  backdrop-blur-lg bg-opacity-0">
      
      <SideBar/>
      
      <MessageContainer/>
    </div>
  )
}

export default Home
