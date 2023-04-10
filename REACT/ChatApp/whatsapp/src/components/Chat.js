import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useState, useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { db } from '../firebase';
import Messages from './Messages'
import Messagesc from './Messagesc';

const Chat = () => {
     const chatuser= useSelector(state=> state.chat.user);
      const chatid= useSelector(state=> state.chat.uid);
      const [messages, setmessages] = useState([]);
      console.log("chatuser",chatuser);
      useEffect(() => {
        try {
          const unsub= onSnapshot(doc(db, "chats", chatid), (doc)=>{
            console.log(chatid);
            
            doc.exists() && setmessages(doc.data().messages);
            console.log(messages)
          })
    
          return () => {
            unsub();
           }
        } catch (error) {
          console.log(error);
        }
        
      }, [chatid]);

  
  return (
    <div className='chat'>
    
    {messages.map((m,index)=> (m.senderId=== chatuser.uid)? <Messages msg={m.msg} key={index}/> : <Messagesc msg={m.msg} key={index}/>)}
    
    </div>
  )
}

export default Chat