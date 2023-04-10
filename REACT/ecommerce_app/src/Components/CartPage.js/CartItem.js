import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../Store/cart_slice";
import { laterActions } from "../../Store/later_slice";
import "./CartItem.css";
const CartItem = ({ item }) => {
  console.log(item.catName);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(cartActions.addToCart(item));
  };
  const handleRemove = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };
  const handleRemoveAll = () => {
    for (let i = 0; i < item.quantity; i++) {
      dispatch(cartActions.removeFromCart(item.id));
    }
  };
  const handleLaterAdd = () => {
    for (let i = 0; i < item.quantity; i++) {
      dispatch(cartActions.removeFromCart(item.id));
      dispatch(laterActions.addToLater(item));
    }
  };
  return (
    <div className="cartItemContainer">
      <div className="CImgContainer">
        <img
          className="CImg"
          src="https://assets.ajio.com/medias/sys_master/root/20211116/wgNp/6193e231f997ddf8f108fe35/-1117Wx1400H-4919468630-multi-MODEL2.jpg"
        ></img>
        <div className="controllerContainer">
          <div onClick={handleRemove} className="controller">
            -
          </div>
          <div className="quantity">{item.quantity}</div>
          <div onClick={handleAdd} className="controller">
            +
          </div>
        </div>
      </div>
      <div className="CInfoContainer">
        <Link
          to={"/categories/Mobiles/" + item.catName + "/" + item.id}
          className="ProductHeader"
        >
          {item.name}
        </Link>
        <div className="ratings">
          <button className="rBtn">4.4</button>
          <h4 style={{ margin: 0 }}>239 Ratings</h4>
        </div>
        <h4>
          ₹{item.price}/- <span className="assured"> B-Assured</span>
        </h4>
        <h4 style={{ marginTop: 0, color: "green" }}>Free Delivery</h4>
        <div
          style={{ marginTop: 30, marginLeft: 0 }}
          className="buttomContainer"
        >
          <button onClick={handleLaterAdd} className="btnC">
            Save For Later
          </button>
          <button onClick={handleRemoveAll} className="btnC">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
