import { async } from '@firebase/util';
import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore';
import React from 'react'
import { db } from '../firebase';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

const MessageInp = () => {
  const [msg, setmsg] = useState("");
  const chatuser= useSelector(state=> state.chat.user);
  const chatid= useSelector(state=> state.chat.uid);
  const userInfo= useSelector(state=> state.auth.user);
  console.log(chatid);
  const handlesubmit= async()=>{
    await updateDoc(doc(db, "chats",chatid), {
      messages: arrayUnion({
        id: uuid(),
        msg,
        senderId: userInfo.user.uid,
        date: Timestamp.now()
      })
    }) 
    setmsg("");
  }
  return (
    <div className='messageinp'>
    <input type='text' placeholder='Type your message' value= {msg} onChange={e=> { setmsg(e.target.value)}}/>
    <button onClick={handlesubmit}>&gt;</button>
    </div>
  )
}

export default MessageInp