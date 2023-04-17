import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddressItem from "../Profile/AddressItem";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/cart_slice";
import "./styles.css";
const GateWay = () => {
  const dispatch = useDispatch();
  const address = JSON.parse(localStorage.getItem("address")).adresses;
  const aId = address.length > 0 ? address[0].id : "";
  const [selectedAdd, setSelectedAdd] = useState(aId);
  const emptyCart = () => {
    dispatch(cartActions.emptyCart());
  };
  return (
    <div className="gateWayContainer">
      <div className="gateWay">
        <h3>Choose Payment Method:</h3>
        <div className="payment">
          <input type="radio" checked></input>
          <label>Cash On Delivery (COD)</label>
        </div>
        <h3>
          Choose Delivery Address:
          <Link to="/profile/editAdd">
            <button style={{ marginLeft: 580, cursor: "pointer" }}>
              + Add New
            </button>
          </Link>
        </h3>
        <div className="allAdd">
          {address.map((item) => {
            return (
              <div className="addressContainer">
                <div>
                  <p>Deliver To: {item.dName}</p>
                  <p>Complet Address: {item.cAdd}</p>
                  <p>Pin: {item.pPin}</p>
                  <p>Contact NUmber: {item.cNum}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {item.id !== selectedAdd && (
                    <button
                      onClick={() => {
                        setSelectedAdd(item.id);
                      }}
                      style={{ marginTop: 50, cursor: "pointer" }}
                    >
                      Choose this address
                    </button>
                  )}
                  {item.id === selectedAdd && (
                    <button
                      style={{ marginTop: 50, backgroundColor: "#f69f2f" }}
                    >
                      Selected Address
                    </button>
                  )}
                </div>
              </div>
            );
          })}{" "}
        </div>
        <Link to="/success">
          <button
            onClick={emptyCart}
            className="buyBtn"
            style={{ marginLeft: 800, marginTop: 20 }}
          >
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GateWay;
