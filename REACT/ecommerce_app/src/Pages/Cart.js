import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "../Components/CartPage.js/CartItem";
import LaterItem from "../Components/CartPage.js/LaterItem";
import { Link } from "react-router-dom";
import { cartActions } from "../Store/cart_slice";
const Cart = () => {
  const userName = useSelector((state) => state.user.userName);
  let cartItems = useSelector((state) => state.cart.itemList);
  if (userName == "Login") {
    cartItems = [];
  }
  const laterItems = useSelector((state) => state.later.itemList);
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const dispatch = useDispatch();
  const cleanCart = () => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")).orders;

    const updatedItems = existingOrders.concat(
      cartItems.map((item) => {
        return { ...item, uid: Math.random() + item.id };
      })
    );
    console.log(updatedItems);
    localStorage.setItem("orders", JSON.stringify({ orders: updatedItems }));
    dispatch(cartActions.emptyCart());
  };

  return (
    <div className="cartContainer">
      <div className="cart">
        <h2 style={{ color: " #8b8989", marginLeft: 30 }}>Cart</h2>
        {cartItems.length === 0 && (
          <h4 style={{ marginTop: 50, marginLeft: 50, marginBottom: 200 }}>
            You have not added any Product to the Cart!
          </h4>
        )}
        {cartItems.length > 0 &&
          cartItems.map((item) => <CartItem item={item} />)}
        <h2 style={{ color: " #8b8989", marginLeft: 30 }}>
          Saved For Later({laterItems.length})
        </h2>
        {laterItems.map((item) => (
          <LaterItem item={item} />
        ))}
      </div>
      <div className="price">
        <h3 className="heading">PRICE DETAILS</h3>
        <div className="pricing">
          <h4 style={{ color: " #8b8989" }}>Price({cartItems.length} Items)</h4>
          <h4>₹{totalPrice}</h4>
        </div>
        <div className="pricing">
          <h4 style={{ color: " #8b8989" }}>Discount 5%(Order Above 1000)</h4>
          <h4 style={{ color: "green" }}>
            ₹{totalPrice > 1000 ? totalPrice * 0.05 : 0}
          </h4>
        </div>
        <div style={{ borderBottomStyle: "dashed" }} className="pricing lowerP">
          <h4 style={{ color: " #8b8989" }}>Delivery Charges</h4>
          <h4 style={{ color: "green" }}>Free</h4>
        </div>
        <div className="pricing lowerP">
          <h3>Total</h3>
          <h3>
            ₹{totalPrice > 1000 ? totalPrice - totalPrice * 0.05 : totalPrice}
          </h3>
        </div>
        <h4 style={{ color: "#57974c", marginLeft: 30, marginBottom: 70 }}>
          {" "}
          You will save {totalPrice * 0.05} on this Order!
        </h4>
        <Link
          to="/gateway"
          style={{
            marginTop: 90,
            marginLeft: 80,
            textDecoration: "none",
            color: "white",
          }}
          className="buyBtn"
          onClick={cleanCart}
        >
          Proceed
        </Link>
      </div>
    </div>
  );
};

export default Cart;
