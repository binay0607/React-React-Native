import React from 'react'
import Binay from '../assets/Binay.jpg'


const Navbar = ({name , imgurl}) => {
  console.log(imgurl);
  return (
    <div className='navbar'>
    <div>
    <img src={Binay || imgurl}></img>
    <h5>{name}</h5>
    </div>
    <h4>:</h4>
    

    </div>
  )
}

export default Navbar