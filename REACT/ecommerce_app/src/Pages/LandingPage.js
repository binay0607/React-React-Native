import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import CategoryCard from "../Components/LandingPage/CategoryCard";
import Sections from "../Components/LandingPage/Sections";
import Corousel from "../Components/LandingPage/Corousel";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { userActions } from "../Store/user_slice";
const array = [
  {
    imgUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    name: "Grocery",
  },
  {
    imgUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    name: "Mobiles",
  },
  {
    imgUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
    name: "Fashion",
  },
  {
    imgUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    name: "Electronics",
  },
  {
    imgUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
    name: "Home",
  },
  {
    imgUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
    name: "Appliances",
  },
  {
    imgUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
    name: "Travel",
  },
  {
    imgUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    name: "Gifts",
  },
  {
    imgUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
    name: "Beauty & Toys",
  },
  {
    imgUrl:
      "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
    name: "Two Wheelers",
  },
];
const sections = ["Fashion", "Electronics", "Home Essentials", "Book and Toys"];
const LandingPage = () => {
  const dispatch = useDispatch();
  const [topShift, settopshift] = useState(-800);
  const [show, setShow] = useState(false);
  const value = localStorage.getItem("userInfo");
  const [showLogin, setshLogin] = useState(true);
  let userStatus = false;
  let userName = "Login";
  console.log("value=>", value);
  if (value) {
    userStatus = JSON.parse(value).isLoggedIn;
    userName = JSON.parse(value).name;
  }
  if (userStatus) {
    dispatch(userActions.setuser(userName));
  } else {
    localStorage.setItem("orders", JSON.stringify({ orders: [] }));
    localStorage.setItem("address", JSON.stringify({ adresses: [] }));
  }
  return (
    <div className="landingPageContainer">
      <div className="topCategories">
        {array.map((item) => (
          <CategoryCard item={item} />
        ))}
      </div>
      <Corousel />
      {sections.map((item, index) => (
        <Sections key={index} item={item} idx={index} />
      ))}
      {show && (
        <div
          onClick={() => {
            setShow(false);
            settopshift(-800);
          }}
          className="layer"
        ></div>
      )}
      {showLogin && (
        <Login
          settopshift={settopshift}
          topShift={topShift}
          setShowLayer={setShow}
        />
      )}
    </div>
  );
};

export default LandingPage;
