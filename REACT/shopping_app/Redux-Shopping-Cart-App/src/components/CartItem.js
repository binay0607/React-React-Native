import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart_slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch= useDispatch();
  const dechandler=()=>{
      dispatch(cartActions.removeFromCart(id))
  }
  const inchandler= ()=>{
      dispatch(cartActions.addToCart({
        name,id, price
      }))
  }
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button onClick={dechandler} className="cart-actions">
        -
      </button>
      <button onClick={inchandler} className="cart-actions" >
        +
      </button>
    </div>
  );
};

export default CartItem;
