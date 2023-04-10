import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import LoginImg from "../Assets/login.png";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Store/user_slice";
import { Link } from "react-router-dom";
const Login = ({ settopshift, topShift, setShowLayer }) => {
  const name = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [number, setNumber] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    if (name === "Login") {
      setTimeout(() => {
        settopshift(90);
        setShowLayer(true);
      }, 1000);
    }
  }, []);

  const handleOtp = () => {
    setNumber(inputRef.current.value);

    setShow(false);
  };
  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ ...user, isLoggedIn: true })
    );
    dispatch(userActions.setuser(user.name));
    dispatch(userActions.setUrl(user.urlPath));
    setShowLayer(false);
    settopshift(-800);
  };

  return (
    <div style={{ top: topShift }} className="LoginModal">
      <div className="leftC">
        <h1 style={{ color: "white", marginLeft: 30, marginTop: 40 }}>Login</h1>
        <h3 style={{ width: "70%", color: "#c1c9de", marginLeft: 30 }}>
          Get access to your Orders, Wishlist and Recommendations
        </h3>
        <img style={{ marginTop: 40 }} src={LoginImg}></img>
      </div>
      <div className="rightC">
        {show && (
          <div className="loginData">
            <input
              ref={inputRef}
              className="Linput"
              type="text"
              placeholder="Enter Email/Mobile Number"
            ></input>
            <p style={{ fontSize: 12, color: "#c1c9de" }}>
              By continuing, you agree to Binkart's{" "}
              <span style={{ color: "blue" }}>Terms of Use</span> and{" "}
              <span style={{ color: "blue" }}>Privacy Policy.</span>
            </p>
            <button
              onClick={handleOtp}
              style={{ backgroundColor: "#ef6332" }}
              className="LoginBtn"
            >
              Request Otp
            </button>
            <h4 style={{ marginTop: 230 }}>
              New to Binkart?{" "}
              <Link to="/signup">
                <span style={{ color: "blue" }}>Create an account</span>
              </Link>
            </h4>
          </div>
        )}

        {!show && (
          <div className="loginData">
            <h4 style={{ marginTop: 90, width: "70%", textAlign: "center" }}>
              Please enter the OTP sent to {number}.{" "}
              <span
                onClick={() => {
                  setShow(true);
                }}
                style={{ color: "blue", cursor: "pointer" }}
              >
                change
              </span>
            </h4>
            <input className="Oinput" type="number" placeholder=""></input>

            <button onClick={handleLogin} className="LoginBtn">
              Verify
            </button>
            <h4 style={{ marginTop: 30 }}>
              Not received your code?{" "}
              <span style={{ color: "blue" }}>Resend code</span>
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
