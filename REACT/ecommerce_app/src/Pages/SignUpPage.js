import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../Store/user_slice";
import profile from "../Assets/profile.png";
import "./SignUpPage.css";
const SignUpPage = () => {
  const [imgPath, setImgPath] = useState("");
  const dispatch = useDispatch();
  const nameRef = useRef();
  const numRef = useRef();
  const fileRef = useRef();

  const handleSignUp = () => {
    dispatch(userActions.setuser(nameRef.current.value));
    dispatch(userActions.setUrl(imgPath));
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        name: nameRef.current.value,
        mob: numRef.current.value,
        isLoggedIn: true,
        urlPath: imgPath,
      })
    );
  };
  const loadFile = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);

    setImgPath(url);
  };
  // console.log("img=>", imgPath);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <label
        for="file"
        style={{ cursor: "pointer", marginTop: 40, position: "relative" }}
      >
        {imgPath === "" && (
          <img style={{ height: 100, width: 100 }} src={profile} />
        )}
        {imgPath != "" && (
          <img
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
            }}
            src={imgPath}
          />
        )}
        {imgPath != "" && (
          <div className="overLayImg">
            <p className="overLayText">Upload New Image</p>
          </div>
        )}
      </label>
      <input
        style={{ display: "none" }}
        type="file"
        id="file"
        onChange={loadFile}
        name="image"
        accept="image/*"
      ></input>

      <input
        ref={nameRef}
        style={{
          width: 300,
          marginTop: 20,
          padding: 5,
        }}
        type="text"
        placeholder="Name"
      ></input>
      <input
        ref={numRef}
        style={{ width: 300, marginTop: 20, padding: 5 }}
        placeholder="mobileNumber or emailId"
        type="text"
      />
      <Link
        to="/"
        onClick={handleSignUp}
        style={{
          marginTop: 40,
          backgroundColor: "blue",
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
          textDecoration: "none",
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 3,
        }}
      >
        SignUp
      </Link>
    </div>
  );
};

export default SignUpPage;
