import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Contacts from './Contacts'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const userInfo= useSelector(state=> state.auth.user);
  console.log(userInfo);
  console.log(userInfo.user.email);

  return (
    <div className='sideBar'>
    <Navbar name= {userInfo.user.displayName} imgurl={userInfo.user.photoURL}/>
    <Search/>
    <Contacts/>
    </div>
  )
}

export default SideBar