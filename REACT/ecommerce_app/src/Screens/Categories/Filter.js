import React, { useState } from "react";
import "./Filter.css";
const brands = [
  "Iphone",
  "OnePlus",
  "Oppo",
  "Realme",
  "Redmi",
  "Samsung",
  "Vivo",
];
const Filter = ({ sendBrands }) => {
  const [rangeV, setrangeV] = useState(100);
  const [showBrands, setshowBrands] = useState([]);
  const handleBrands = (brand) => {
    if (showBrands.includes(brand)) {
      sendBrands(showBrands.filter((item) => item !== brand));
      setshowBrands((prev) => prev.filter((item) => item !== brand));
    } else {
      sendBrands([...showBrands, brand]);
      setshowBrands((prev) => [...prev, brand]);
    }
  };
  const handleRange = (event) => {
    if (rangeV < 40 && event.target.value < 40) {
      return;
    }
    setrangeV(event.target.value);
  };
  return (
    <div className="filterContainer">
      <div className="section">
        <h1 className="heading">Filter</h1>
      </div>
      <div className="section">
        <h3 className="subHeading">Categories</h3>
        <h4 className="info">Mobiles</h4>
      </div>
      <div className="section">
        <h3 className="subHeading">Brands</h3>
        <div className="checkBoxes">
          {brands.map((item) => {
            return (
              <div className="CheckBoxContainer">
                <input
                  type="checkbox"
                  id={"id" + item}
                  onClick={handleBrands.bind(null, item)}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section">
        <h3 className="subHeading">Price Range</h3>
        <input
          onChange={handleRange}
          value={rangeV}
          className="range"
          type="range"
        />
        <h3 style={{ marginLeft: 20 }}>
          Upto <span>₹{rangeV * 300}</span>
        </h3>
      </div>
    </div>
  );
};

export default Filter;
