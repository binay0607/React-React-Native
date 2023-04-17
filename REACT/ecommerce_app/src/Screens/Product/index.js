import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mobileData } from "../../Data/data";
import "./styles.css";
import { FaTag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cart_slice";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { favoriteActions } from "../../Redux/favorite_slice";
import { useSelector } from "react-redux";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdError } from "react-icons/md";
import { shuffle } from "../../Util/util";
import ProductCard from "../Categories//ProductCard";
import Fallback from "../../Components/Fallback";
const Product = () => {
  const userName = useSelector((state) => state.user.userName);
  const [bottomShift, setBottomShift] = useState(-1100);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.product;
  const model = params.model;

  const modelArr = mobileData.filter((item) => item.brandName === model);
  const showData = shuffle(modelArr[0].mobiles).slice(0, 6);
  const showProduct = modelArr[0].mobiles.filter(
    (item) => item.id === productId
  )[0];
  const handleCart = () => {
    dispatch(cartActions.addToCart(showProduct));
    setBottomShift(45);
    setTimeout(() => {
      setBottomShift(-1100);
    }, 2000);
  };
  const handleOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")).orders;
    existingOrders.push({
      ...showProduct,
      quantity: 1,
      totalPrice: showProduct.price,
      uid: Math.random() + showProduct.id,
    });
    localStorage.setItem("orders", JSON.stringify({ orders: existingOrders }));
  };
  const favorites = useSelector((state) => state.favorite.itemList);
  const handleFav = () => {
    console.log("entered handleFav");
    if (favorites.includes(showProduct)) {
      dispatch(favoriteActions.removeFromFavorite(showProduct.id));
    } else {
      dispatch(favoriteActions.addToFavorite(showProduct));
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [productId]);
  if (isLoading) {
    return (
      <div
        className="productContainer"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fallback />
      </div>
    );
  }
  return (
    <>
      <div className="productContainer">
        <div className="PimgContainer">
          <img
            className="PImg"
            src="https://assets.ajio.com/medias/sys_master/root/20211116/wgNp/6193e231f997ddf8f108fe35/-1117Wx1400H-4919468630-multi-MODEL2.jpg"
          ></img>
        </div>
        <div className="PinfoContainer">
          <h1 className="mname" style={{ margin: 0, marginTop: 6 }}>
            {showProduct.name}
          </h1>
          <div className="ratings">
            <button className="rBtn">4.4</button>
            <h3 style={{ margin: 0 }}>239 Ratings</h3>
          </div>
          <h2>
            ₹{showProduct.price}/- <span className="assured"> B-Assured</span>
          </h2>
          <h4 style={{ marginTop: 0, color: "green" }}>Free Delivery</h4>
          <h4 style={{ marginTop: 6, marginBottom: 0 }}>
            <FaTag style={{ color: "green", marginRight: 8 }} />
            Bank Offer10% off on Samsung axis Bank credit card{" "}
            <span style={{ color: "blue", marginLeft: 9 }}>Know More</span>
          </h4>
          <h4 style={{ marginBottom: 0 }}>
            <FaTag style={{ color: "green", marginRight: 8 }} />
            Bank Offer10% instant discount on SBI Credit Card EMI Transactions,
            up to ₹1000, on orders of ₹5,000 and above
            <span style={{ color: "blue", marginLeft: 9 }}>Know More</span>
          </h4>
          <h4 style={{ marginBottom: 0 }}>
            <FaTag style={{ color: "green", marginRight: 8 }} />
            Special PriceGet extra ₹4000 off (price inclusive of
            cashback/coupon)
            <span style={{ color: "blue", marginLeft: 9 }}>Know More</span>
          </h4>
          <h4 style={{ marginBottom: 0 }}>
            <FaTag style={{ color: "green", marginRight: 8 }} />
            Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift
            Card worth up to ₹500*
            <span style={{ color: "blue", marginLeft: 9 }}>Know More</span>
          </h4>
          <h4 style={{ marginBottom: 0 }}>
            <FaTag style={{ color: "green", marginRight: 8 }} />
            EMI starting from ₹264/month
            <span style={{ color: "blue", marginLeft: 9 }}>Know More</span>
          </h4>
          <div className="btnContainer">
            <button onClick={handleCart} className="addBtn">
              Add To Cart
            </button>
            <Link
              to="/gateway"
              style={{ textDecoration: "none", color: "white" }}
              className="buyBtn"
              onClick={handleOrder}
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div className="favoriteProduct" onClick={handleFav}>
          {!favorites.includes(showProduct) && (
            <AiOutlineHeart style={{ color: "red", fontSize: 50 }} />
          )}
          {favorites.includes(showProduct) && (
            <AiFillHeart style={{ color: "red", fontSize: 50 }} />
          )}
        </div>

        {userName !== "Login" && (
          <div className="cartCofirm" style={{ bottom: bottomShift }}>
            <IoIosCheckmarkCircle
              style={{ color: "green", fontSize: 22, marginRight: 6 }}
            />
            <h4>{showProduct.name} Added to the Cart Successfully</h4>
          </div>
        )}
        {userName === "Login" && (
          <div className="cartCofirm" style={{ bottom: bottomShift }}>
            <MdError style={{ color: "red", fontSize: 22, marginRight: 6 }} />
            <h4>Please Login First</h4>
          </div>
        )}
      </div>
      <h1 style={{ marginLeft: 40 }}>Similar Products:</h1>
      <div className="productsContainer">
        {showData.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </>
  );
};

export default Product;
