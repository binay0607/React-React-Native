import React from "react";
import { useLocation } from "react-router-dom";
import style from "./Success.module.css";
const SuccessPage = () => {
  const user = useLocation().state;
  console.log(user);
  return (
    <div className={style.container}>
      <h1 className={style.header}>You have Logged in successfully</h1>
      <div className={style.detailsContainer}>
        <h3>Name: {user.name}</h3>
        <h3>Email Address: {user.email}</h3>
        <h3>Mobile Number: {user.phone}</h3>
        <h3>Gender: {user.gender}</h3>
        <h3>Language Choosen: {user.language}</h3>
        <h3>Zip Code: {user.zcode}</h3>
        <h3>About: {user.about}</h3>
        <div className={style.intContainer}>
          <h3>Interests : </h3>
          {user.interests.map((item) => (
            <h3>{item},</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
