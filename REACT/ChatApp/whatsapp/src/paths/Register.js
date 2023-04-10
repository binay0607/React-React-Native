import React from "react";
import "./Auth.css";
import profile from "../assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgsrc, setimgsrc] = useState(profile);
  const navigate = useNavigate();
  const [error, seterror] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    const file = e.target[0].value;
    const displayName = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
      //Create a unique image name
      const metadata = {
        contentType: 'image/jpeg'
      };
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
     
      
       await uploadBytesResumable(storageRef, file).then(() => {
         getDownloadURL(storageRef).then(async (downloadURL) => {
           
           try {
             //Update profile
             await updateProfile(res.user, {
               displayName,
               photoURL: downloadURL,
             });
             //create user on firestore
             await setDoc(doc(db, "users", res.user.uid), {
               uid: res.user.uid,
               displayName,
               email,
               photoURL: downloadURL,
             });

             //create empty user chats on firestore
             await setDoc(doc(db, "userChats", res.user.uid), {});
           } catch (err) {
             console.log(err);
             setErr(true);
             setLoading(false);
           }
         });
       });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
        seterror("User already exists, please try loging in");
      } else {
        seterror("Password should be at least 6 characters");
      }
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <span className="logo"> Bin Chat</span>
        <span className="title"> Register</span>

        <form onSubmit={handleRegister}>
          <input type="file" id="fileinp" />
          <label htmlFor="fileinp">
            <img src={imgsrc}></img>
          </label>
          <input className="inp" type="text" placeholder="User Name" />
          <input className="inp" type="email" placeholder="Email Id" />
          <input className="inp" type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
        <span>{error}</span>
        <p>
          Already have an accout?
          <Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
