import React from 'react'
import dummyProfile from '../assets/dummyprofile.png'
import { useState } from 'react';
import { collection, query, where ,getDocs, getDoc,doc, setDoc, updateDoc, serverTimestamp} from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { async } from '@firebase/util';
import { useSelector ,useDispatch} from 'react-redux'
import { chatsActions } from '../store/chat_slice';
const Search = () => {
  const dispatch= useDispatch();
  const userInfo= useSelector(state=> state.auth.user);
  const [username, setusername] = useState("");
  const [user, setuser]= useState(null);
  const handlesearch= async()=>{
    const q= query (collection(db, "users"),where("displayName", "==", username))
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setuser(doc.data());
        dispatch(chatsActions.setchatuser(doc.data()));
      });
    } catch (error) {
      console.log(error);
    }
  }
  const handlekey= (e)=>{
    
      e.code=== "Enter" && handlesearch();
  }
  
  const handleclick= async ()=>{
      const combinedId= userInfo.user.uid > user.uid ? userInfo.user.uid+ user.uid : user.uid+ userInfo.user.uid;
      dispatch(chatsActions.setchatid(combinedId));
      console.log("clicked work here is the combined id: ", combinedId);
      try {
        const res= await getDoc(doc(db, "chats", combinedId));
        console.log(res);
        if(!res.exists()){
         
          await setDoc (doc(db, "chats", combinedId), {messages: []});

          await updateDoc(doc(db,"userChats",userInfo.user.uid), {
            [combinedId + ".userInfo.user"]:{
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL
            },
            [combinedId+".date"]: serverTimestamp()
          })
          await updateDoc(doc(db,"userChats",user.uid), {
            [combinedId + ".userInfo.user"]:{
              uid: userInfo.user.uid,
              displayName: userInfo.user.displayName,
              photoURL: userInfo.user.photoURL
            },
            [combinedId+".date"]: serverTimestamp()
          })
        }

      } catch (error) {
        console.log(error);
      }
     setuser(null);
     setusername("");
  }
  return (
    <div className='search'>
    <input type='text' placeholder="Search for contacts" value={username} onKeyDown={handlekey} onChange={e=> setusername(e.target.value)}></input>
    {user && <div className='contact' onClick={handleclick}>
      <img src={user.photoURL}/>
      <span>{user.displayName}</span>
    </div>}
    </div>

  )
}

export default Search