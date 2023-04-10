import React from 'react'
import { useSelector } from 'react-redux'
import Chat from './Chat'
import ChatBar from './ChatBar'
import MessageInp from './MessageInp'
import Chatc from './Chatc'
const ChatWindow = () => {
  const chatUser= useSelector(state=> state.chat.user);
  
  return (
    <div className='chatWindow'>
    {!chatUser && <ChatBar name= "Welcome! Search Contact to begin chat" />}
    {chatUser && <ChatBar name= {chatUser.displayName} imgurl={chatUser.photoURL}/>}
    {!chatUser && <Chatc/>}
    {chatUser && <Chat/>}
    <MessageInp/>
    </div>
  )
}

export default ChatWindow