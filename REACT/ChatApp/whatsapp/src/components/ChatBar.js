import React from 'react'
import dummyProfile from "../assets/dummyprofile.png"
const ChatBar = ({name, imgurl}) => {
  return (
    <div className='chatbar'>
    <img src={dummyProfile || imgurl}/>
    <h3>{name}</h3>
    </div>
  )
}

export default ChatBar