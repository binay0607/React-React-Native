import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart_slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  // const cartItems= useSelector(state=> state.cart.itemList);
  // console.log(cartItems);
  const dispatch= useDispatch();
  const handleClick= ()=>{
    dispatch(cartActions.addToCart({
      name,id, price
    }))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default Product;
