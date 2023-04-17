import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const [gender, setgender] = useState("");
  const langRef = useRef();
  const aboutRef = useRef();
  const [photoUrl, setPhotoUrl] = useState("Sorry no Image Found");

  const handleNav = () => {
    console.log("submitting");
    navigate("/second", {
      state: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        gender: gender,
        language: langRef.current.value,
        about: aboutRef.current.value,
        photoUrl: photoUrl,
      },
    });
  };
  const handlePhoto = (e) => {
    const url = e.target.files[0];
    setPhotoUrl(url);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>
        <label>Upload Photo: </label>
        <input type="file" onChange={handlePhoto}></input>
      </h2>
      <h2>
        <label>
          Name:
          <input ref={nameRef} type="text" />{" "}
        </label>
      </h2>
      <h2>
        <label>
          Email:
          <input ref={emailRef} type="email" />{" "}
        </label>
      </h2>
      <h2>
        <label>
          Gender:
          <input
            type="radio"
            onClick={() => {
              setgender("Male");
            }}
          ></input>
          <span>Male</span>
          <input
            type="radio"
            onClick={() => {
              setgender("female");
            }}
          ></input>
          <span>Female</span>
        </label>
      </h2>
      <h2>
        <label>
          {" "}
          Language:
          <select name="language" ref={langRef}>
            <option value="Select">Select A Language</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
            <option value="odia">odia</option>
          </select>
        </label>
      </h2>
      <h2>
        <label>
          {" "}
          about you:{" "}
          <textarea type="text" ref={aboutRef}>
            {" "}
          </textarea>
        </label>
      </h2>

      <h2>
        <button onClick={handleNav}> Submit</button>
      </h2>
    </div>
  );
};
export default First;
