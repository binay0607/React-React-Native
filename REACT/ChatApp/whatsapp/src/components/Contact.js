import React from "react";
import dummyProfile from "../assets/dummyprofile.png";
const Contact = ({ imgurl, name, lastmsg }) => {
  console.log(name);
  return (
    <div className="contact">
      <img src={dummyProfile || imgurl} />
      <div>
        <span>{name}</span>
        <p>{lastmsg}</p>
      </div>
    </div>
  );
};

export default Contact;
