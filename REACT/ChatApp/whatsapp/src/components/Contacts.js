import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import dummyProfile from '../assets/dummyprofile.png'
import { onSnapshot, collection, query, where ,getDocs, getDoc,doc, setDoc, updateDoc, serverTimestamp} from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { useDispatch, useSelector } from 'react-redux'
import { chatsActions } from '../store/chat_slice';

const Contacts = () => {
  const userInfo= useSelector(state=> state.auth.user);
  const dispatch=useDispatch()
  const [chats, setchats] = useState([]);
   useEffect(()=>{
     const getChats=()=>{
       const unsub = onSnapshot(doc(db, "userChats", userInfo.user.uid), (doc) => {
         setchats(doc.data());  
       });
       return ()=>{
        unsub();
       };
     }
     userInfo.user.uid && getChats();
   },[userInfo.user.uid]);
   
  console.log(Object.entries(chats));

  const handleClick =(user, uid)=>{
    // console.log("this is the id->", user);
      //  dispatch(chatsActions.setchatuser(user));
      // dispatch(chatsActions.setchatid(uid));
  }
  return (
    <div className='contacts'>
    
    

     
        
    </div>
  )
}

export default Contacts