import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth_slice";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  const dispatch= useDispatch();
  const handleClick= ()=>{
      dispatch(authActions.logout());
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
