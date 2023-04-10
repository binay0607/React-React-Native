import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useState, useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { db } from '../firebase';
import Messages from './Messages'

const Chatc = () => {
    
      const [messages, setmessages] = useState([]);
    

  
  return (
    <div className='chat'>
    
    {messages.map((m,index)=> <Messages msg={m.msg} key={index}/>)}
    
    </div>
  )
}

export default Chatc