import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mobileData } from "../../Data/data";
import { shuffle } from "../../Util/util";
import { userActions } from "../../Redux/user_slice";
import { FaUser } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { favoriteActions } from "../../Redux/favorite_slice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.itemList);
  const userName = useSelector((state) => state.user.userName);
  const [searchText, setSearchText] = useState("");
  const [searchArr, setSearchArr] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const allItems = mobileData.reduce(
    (acc, curr) => [...acc].concat(curr.mobiles),
    []
  );
  const userUrl = useSelector((state) => state.user.userUrl);
  const handleLogout = () => {
    dispatch(favoriteActions.cleanFavorite());
    dispatch(userActions.setuser("Login"));
    dispatch(userActions.setUrl(""));
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ ...userData, isLoggedIn: false })
    );
    setShowOptions(false);
  };
  const handleLoginToggle = () => {
    if (userName === "Login") return;
    setShowOptions(!showOptions);
  };
  console.log("userName=>", userName);
  useEffect(() => {
    console.log(searchText);
    if (searchText.trim().length !== 0) {
      setSearchArr(
        allItems.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
      console.log("seracha", searchArr);
    } else {
      setSearchArr([]);
    }
  }, [searchText]);

  return (
    <div className="headerContainer">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="logo-heading">BinKart</p>
        </Link>
        <p className="logo-subheading">
          Explose <span>Binay+</span>
        </p>
      </div>
      <div className="completeSearch">
        <div className="searchContainer">
          <input
            value={searchText}
            placeholder="Search for Products, Brands and more"
            className="search-bar"
            onChange={(event) => setSearchText(event.target.value)}
          ></input>
          <span className="btnConatainer">
            <FaSearch
              style={{ color: "blue", fontSize: "20px", cursor: "pointer" }}
            />
          </span>
          {/*<button className="search-btn">Search</button>*/}
        </div>
        <div className="SearchInfo">
          {shuffle(searchArr).map((item) => (
            <div className="searchRes">
              <Link
                to={"/categories/Mobiles/" + item.catName + "/" + item.id}
                style={{ textDecoration: "none" }}
              >
                <h5 onClick={() => setSearchText("")} className="searchItem">
                  {item.name}
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <FaCartPlus style={{ color: "white", fontSize: "20px" }} />
        <Link className="linkToCart" to={userName === "Login" ? "/" : "/cart"}>
          <button className="cart-btn"> Cart</button>
          {cartItems.length > 0 && userName !== "Login" && (
            <button className="cartNumber">
              <p style={{ marginTop: 0 }}>{cartItems.length}</p>
            </button>
          )}
        </Link>
        <div>
          <Link
            to={userName === "Login" && "/"}
            style={{ display: "flex", alignItems: "center", marginLeft: 10 }}
          >
            {userUrl === "" && (
              <BiUserCircle style={{ color: "white", fontSize: "20px" }} />
            )}
            {userUrl !== "" && (
              <img
                src={userUrl}
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 30,
                  marginRight: 5,
                }}
              ></img>
            )}
            <button onClick={handleLoginToggle} className="login-btn">
              {userName}
            </button>
          </Link>
          {showOptions && (
            <div
              className="dropdown"
              style={{
                position: "absolute",
                backgroundColor: "white",
                width: 140,
                height: 160,
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderWidth: 1,
                zIndex: 10,
              }}
            >
              <Link
                to="/profile"
                onClick={() => setShowOptions(false)}
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaUser style={{ color: "blue", marginTop: 3 }} />
                <p
                  style={{
                    marginTop: 8,
                    marginBottom: 5,
                    textDecoration: "none",
                    padding: 6,
                    color: "black",
                    borderBottomWidth: 1,
                  }}
                >
                  Profile
                </p>
              </Link>
              <Link
                to="/orders"
                onClick={() => setShowOptions(false)}
                style={{ display: "flex", alignItems: "center" }}
              >
                <BsBagFill style={{ color: "blue" }} />
                <p
                  style={{
                    marginTop: 3,
                    marginBottom: 4,
                    textDecoration: "none",
                    padding: 6,
                    color: "black",
                    borderBottomWidth: 1,
                  }}
                >
                  Orders
                </p>
              </Link>
              <Link
                to="/favorites"
                onClick={() => setShowOptions(false)}
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaPlusCircle style={{ color: "blue" }} />
                <p
                  style={{
                    marginTop: 3,
                    marginBottom: 4,
                    textDecoration: "none",
                    padding: 6,
                    color: "black",
                    borderBottomWidth: 3,
                  }}
                >
                  WishList
                </p>
              </Link>
              <Link
                to="/"
                onClick={handleLogout}
                style={{ display: "flex", alignItems: "center" }}
              >
                <IoLogOut style={{ color: "blue", fontSize: 20 }} />
                <p
                  style={{
                    marginTop: 3,
                    marginBottom: 4,
                    textDecoration: "none",
                    padding: 6,
                    color: "black",
                    borderBottomWidth: 3,
                  }}
                >
                  Logout
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
