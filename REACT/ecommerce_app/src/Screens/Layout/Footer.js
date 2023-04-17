import React from "react";
import "./Footer.css";
import FooterImg from "../../Assets/footer.png";
const Footer = () => {
  return (
    <div className="footerContainer">
      <img style={{ width: "100%" }} src={FooterImg}></img>
    </div>
  );
};

export default Footer;
