import React from 'react'
import SideBar from '../components/SideBar'
import ChatWindow from '../components/ChatWindow'
import './HomePage.css'
const HomePage = () => {

  return (
    <div className='container'>
    <div className='homewrapper'>
        <SideBar/>
        <ChatWindow/>
    </div>
    </div>
  )
}

export default HomePage