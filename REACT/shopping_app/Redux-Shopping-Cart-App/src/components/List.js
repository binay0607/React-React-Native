import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart_slice";
import { listActions } from "../store/list_slice";
const List= ({ name,title, url}) => {
  const dispatch= useDispatch();
  const handleClick= ()=>{
    console.log('button clicked', name);
    dispatch(listActions.removeItem(name));
  }
  
 
  return (

    <div className="cartItem">
      <h2> {name}</h2>
      <p>{title}</p>
      <a href={url}>Click Here To Read</a>
  <button onClick={handleClick} className="btn" >X</button> 
      
    </div>
  );
};

export default List;
