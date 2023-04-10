import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import "./OrdersPage.css";
const OrdersPage = () => {
  const ordersData = localStorage.getItem("orders");
  const [orders, setOrders] = useState([]);
  const [bottomShift, setBottomShift] = useState(-110);
  useEffect(() => {
    if (ordersData) {
      setOrders(JSON.parse(ordersData).orders);
    }
  }, []);

  const handleOrder = (id) => {
    setBottomShift(20);
    setTimeout(() => {
      setBottomShift(-110);
    }, 2000);
    const updatedOrders = orders.filter((item) => item.uid !== id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify({ orders: updatedOrders }));
  };
  return (
    <div className="ordersContainer">
      {orders.length === 0 && <h3>No orders Found.</h3>}
      {orders.map((item) => {
        return (
          <div className="orderItem">
            <img
              className="oImg"
              src="https://assets.ajio.com/medias/sys_master/root/20211116/wgNp/6193e231f997ddf8f108fe35/-1117Wx1400H-4919468630-multi-MODEL2.jpg"
            ></img>
            <div className="infoContainer">
              <Link
                to={"/categories/Mobiles/" + item.catName + "/" + item.id}
                className="orderLink"
              >
                <h2 style={{ marginBottom: 0 }}>{item.name}</h2>
              </Link>
              <h3 style={{ marginTop: 4 }}>₹{item.price}</h3>
              <h4 style={{ color: "green" }}>Delivery in 5 days</h4>
            </div>
            <div className="infoContainer">
              <h3>Quantity: {item.quantity}</h3>
              <h3>Total Price: ₹{item.totalPrice}</h3>
            </div>
            <button
              onClick={handleOrder.bind(null, item.uid)}
              style={{ marginLeft: 20, cursor: "pointer" }}
            >
              Cancel Order
            </button>
          </div>
        );
      })}
      <div className="orderCancel" style={{ bottom: bottomShift }}>
        <IoIosCheckmarkCircle
          style={{ color: "green", fontSize: 22, marginRight: 6 }}
        />
        <h4>Order Cancelled Successfully</h4>
      </div>
    </div>
  );
};

export default OrdersPage;
