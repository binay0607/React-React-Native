import React from "react";
import dummyProfile from '../assets/dummyprofile.png';
const Messagesc = ({msg}) => {
  return (
    <div className="messages condition">
      <div className="messageinfo">
       <img src={dummyProfile}/>
       <span>Just Now</span>
      </div>
      <div className="messagecontent"><span>{msg}</span></div>
    </div>
  );
};

export default Messagesc;
