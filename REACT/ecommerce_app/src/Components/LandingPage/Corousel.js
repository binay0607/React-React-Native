import React, { useState } from "react";
import "./Corousel.css";
const Corousel = () => {
  const [shiftValue, setShiftValue] = useState(0);
  const shiftR = ">";
  const shiftL = "<";
  const handleClickR = () => {
    if (shiftValue === -6300) {
      setShiftValue(0);
      return;
    }
    console.log("shift clicked", shiftValue);
    setShiftValue(shiftValue - 2100);
  };
  const handleClickL = () => {
    if (shiftValue === 0) {
      setShiftValue(-6300);
      return;
    }
    console.log("shift clicked", shiftValue);
    setShiftValue(shiftValue + 2100);
  };
  return (
    <div className="corouserContainer">
      <div className="ImgContainer" style={{ left: shiftValue }}>
        <img
          className="cImg"
          src="https://rukminim1.flixcart.com/fk-p-flap/944/240/image/9532a2a709bccfc3.jpg?q=50"
        ></img>
        <img
          className="cImg"
          src="https://rukminim1.flixcart.com/fk-p-flap/944/240/image/a37c7aa9669fcd4c.jpg?q=50"
        ></img>
        <img
          className="cImg"
          src="https://rukminim1.flixcart.com/fk-p-flap/944/240/image/11ce2872b4ee2c3a.jpg?q=50"
        ></img>

        <img
          className="cImg"
          src="https://rukminim1.flixcart.com/fk-p-flap/844/240/image/461548ae51f44af3.jpg?q=50"
        ></img>
      </div>

      <div
        onClick={handleClickR}
        className="navigatorR"
        style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
      >
        <h1>{shiftR}</h1>
      </div>
      <div
        onClick={handleClickL}
        className="navigatorL"
        style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
      >
        <h1>{shiftL}</h1>
      </div>
    </div>
  );
};

export default Corousel;
