import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Store/user_slice";
import { BsBagFill } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./ProfilePage.css";
import AddressItem from "../Components/ProfilePage/AddressItem";
const ProfilePage = () => {
  let returned = false;
  if (useLocation().state) {
    returned = true;
  }
  const [addresses, setAddresses] = useState([]);
  const userName = useSelector((state) => state.user.userName);
  const [uName, setuName] = useState(userName);
  const [topShift, setTopShift] = useState(returned ? 171 : 133);
  const dispatch = useDispatch();
  const imgPath = useSelector((state) => state.user.userUrl);
  const loadFile = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    dispatch(userActions.setUrl(url));
  };
  useEffect(() => {
    setAddresses(JSON.parse(localStorage.getItem("address")).adresses);
  }, []);
  const updateAdd = (newAddress) => {
    setAddresses(newAddress);
  };
  return (
    <div className="profilePageContainer">
      <div className="prod-sideBar">
        <div style={{ marginTop: 20 }} className="prod-section">
          <h2 style={{ borderBottomWidth: 1 }}>Hello {userName}!</h2>
        </div>
        <div style={{ marginTop: 30 }} className="prod-section">
          <h4
            onClick={() => {
              setTopShift(133);
            }}
            className="pTexts"
          >
            Personal Information
          </h4>
          <h4
            onClick={() => {
              setTopShift(171);
            }}
            className="pTexts"
          >
            Manage Addresses
          </h4>
        </div>
        <div style={{ marginTop: 40 }} className="prod-section">
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <h4 className="pTexts">
              <FaCartPlus style={{ color: "blue", marginRight: 8 }} />
              Your Cart
            </h4>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none", color: "black" }}>
            <h4 className="pTexts">
              <BsBagFill style={{ color: "blue", marginRight: 8 }} />
              Your Orders
            </h4>
          </Link>
          <Link
            to="/favorites"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h4 className="pTexts">
              <FaPlusCircle style={{ color: "blue", marginRight: 6 }} /> Your
              WishList
            </h4>
          </Link>
        </div>
        <div style={{ top: topShift }} className="overLaySec"></div>
      </div>
      {topShift === 133 ? (
        <div className="profileContainer">
          <h3>Your Profile:</h3>
          <label
            for="file"
            style={{ cursor: "pointer", marginTop: 10, position: "relative" }}
          >
            <img
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
              }}
              src={imgPath}
            />
            <div className="overLayImg">
              <p className="overLayText">Upload New Image</p>
            </div>
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={loadFile}
            name="image"
            accept="image/*"
          ></input>
          <h3>Your Name:</h3>
          <input
            onChange={(e) => setuName(e.target.value)}
            value={uName}
            style={{ width: "40%", height: 30, marginLeft: 5, fontSize: 20 }}
            type="text"
          ></input>
          <h3>Your Gender:</h3>
          <div style={{ display: "flex" }}>
            <h4 style={{ margin: 0 }}>
              <input type="radio" checked />
              Man
            </h4>
            <h4 style={{ margin: 0, marginLeft: 10 }}>
              <input type="radio" />
              Woman
            </h4>
          </div>
          <h3>Your Mobile Number</h3>
          <input
            style={{ width: "40%", height: 30, marginLeft: 5, fontSize: 20 }}
            type="text"
          ></input>
          <button
            onClick={() => {
              const user = JSON.parse(localStorage.getItem("userInfo"));
              dispatch(userActions.setuser(uName));
              localStorage.setItem(
                "userInfo",
                JSON.stringify({ ...user, name: uName })
              );
            }}
            style={{
              width: "20%",
              paddingTop: 10,
              paddingBottom: 10,
              marginLeft: 30,
              marginTop: 50,
            }}
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div className="profileContainer">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Your Addresses:</h3>
            <Link to="editAdd">
              <button style={{ cursor: "pointer" }}>+ Add New</button>
            </Link>
          </div>
          <div style={{ overflowY: "scroll" }}>
            {addresses.map((item) => {
              return (
                <AddressItem
                  index={item.id}
                  item={item}
                  updateAdd={updateAdd}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
