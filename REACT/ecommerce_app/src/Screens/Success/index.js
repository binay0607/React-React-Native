import React from "react";
import { Link } from "react-router-dom";
const SuccessPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>You have successfully placed your order!</h1>
      <h3 style={{ color: "#363635" }}>
        Your order will be delivered in next 5 days.
      </h3>
      <Link
        to="/"
        style={{
          marginTop: 90,
          backgroundColor: "#2774f0",
          color: "white",
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 30,
          paddingRight: 30,
          textDecoration: "none",
          borderRadius: 5,
        }}
      >
        Return to HomePage
      </Link>
    </div>
  );
};

export default SuccessPage;
