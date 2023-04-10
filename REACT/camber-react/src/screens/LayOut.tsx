import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { SlEnvolope } from "react-icons/sl";
import { AiOutlineBell } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiUserCircle } from "react-icons/bi";
const LayOut = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div style={{ width: "100%" }} className="d-flex">
      <div
        style={{
          height: "130vh",
          backgroundColor: "#3377a3",
          width: showSideBar ? 250 : 0,
        }}
        className={"d-flex flex-column flex-shrink-0 align-items-center"}
      >
        <BiUserCircle
          className="mt-4"
          style={{ color: "white", fontSize: 100 }}
        />
        <span className="fs-5 text-white">user@xyz.com</span>
        <hr style={{ width: "100%" }} />
        <span className="fs-6 text-white">Search Responder Profile</span>
        <hr style={{ width: "100%" }} />
        <span className="fs-6 text-white">In-Marketing Monitoring</span>
        <hr style={{ width: "100%" }} />
        <span className="fs-6 text-white">Re-Marketing</span>
        <hr style={{ width: "100%" }} />
        <span className="fs-6 text-white">Campaign Call Tracking</span>
        <hr style={{ width: "100%" }} />
      </div>
      <div style={{ width: 100000 }}>
        <nav className="navbar navbar-expand bg-light">
          <div className="container-fluid">
            <a onClick={toggleSideBar} className="navbar-brand">
              <RxHamburgerMenu style={{ color: "grey", fontSize: 24 }} />
            </a>
            <div className="mx-5" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <SlEnvolope style={{ color: "dodgerblue", fontSize: 24 }} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <AiOutlineBell style={{ color: "#72f24b", fontSize: 24 }} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <ImSwitch style={{ color: "#fa3f2a", fontSize: 24 }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default LayOut;
