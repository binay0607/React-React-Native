import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cart_slice";
import { laterActions } from "../../Redux/later_slice";
import { Link } from "react-router-dom";
import "./LaterItem.css";
const LaterItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(laterActions.addToLater(item));
  };
  const handleRemove = () => {
    dispatch(laterActions.removeFromLater(item.id));
  };
  const handleRemoveAll = () => {
    for (let i = 0; i < item.quantity; i++) {
      dispatch(laterActions.removeFromLater(item.id));
    }
  };
  const handleCartAdd = () => {
    for (let i = 0; i < item.quantity; i++) {
      dispatch(laterActions.removeFromLater(item.id));
      dispatch(cartActions.addToCart(item));
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
          <button onClick={handleCartAdd} className="btnC">
            Move To Cart
          </button>
          <button onClick={handleRemoveAll} className="btnC">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaterItem;
