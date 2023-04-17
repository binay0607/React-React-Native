import React, { useRef } from "react";
import "./styles.css";
import errorImg from "../../Assets/errorImg.png";
import { Link } from "react-router-dom";
const NoPage = () => {
  const rangeRef = useRef();
  const handleClick = () => {
    console.log(rangeRef.current.value);
  };
  return (
    <div className="noPageContainer">
      <div className="header">
        <h1 style={{ color: "white" }}>BinKart</h1>
      </div>
      <img
        style={{ marginTop: 30, width: 450, height: 300 }}
        src={errorImg}
      ></img>
      <h3>Page you are looking for doesn't exist.</h3>
      <Link to="/">
        <button onClick={handleClick}>Go to HomePage</button>
      </Link>
    </div>
  );
};

export default NoPage;
