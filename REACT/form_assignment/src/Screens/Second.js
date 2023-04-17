import React from "react";
import { useLocation } from "react-router-dom";
const Second = () => {
  const user = useLocation().state;
  const url = URL.createObjectURL(user.photoUrl);
  return (
    <div>
      <img
        src={url}
        style={{ width: 100, height: 100, borderRadius: 100 }}
      ></img>
      <h1>Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
      <h1> Gender: {user.gender}</h1>
      <h1>Language: {user.language}</h1>
      <h1>About: {user.about}</h1>
    </div>
  );
};

export default Second;
