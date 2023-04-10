import React from "react";
import "./Auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth_slice";
const Login = () => {
  const dispatch = useDispatch();
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const userinfo = await signInWithEmailAndPassword(auth, email, password);
      dispatch(authActions.setuser(userinfo));
      dispatch(authActions.login());
      navigate("/home");
    } catch (error) {
      seterror(true);
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <span className="logo"> Bin Chat</span>
        <span className="title"> Login</span>

        <form onSubmit={handleLogin}>
          <input className="inp" type="email" placeholder="Email Id" />
          <input className="inp" type="password" placeholder="Password" />
          <button type="submit">Login</button>
          {error && <span>Wrong Email or Password</span>}
        </form>
        <p>
          Don't have an accout?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
