import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItemsList= useSelector(state=> state.cart.itemList);
  
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItemsList.map((item, index)=>(
          console.log(item.totalPrice),
          <li key={index}>
            <CartItem id={item.id} name= {item.name} total={item.totalPrice} quantity= {item.quantity} price= {item.price}/>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default CartItems;
