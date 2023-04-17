import React, { useState } from "react";
import "./Sections.css";
import sectionImg1 from "../../Assets/dress.png";
import sectionImg2 from "../../Assets/mobile.png";
import sectionImg3 from "../../Assets/home.png";
import sectionImg4 from "../../Assets/toys.png";
import SectionFeature from "./SectionFeature";
import { Link } from "react-router-dom";

const imagesArr = [sectionImg1, sectionImg2, sectionImg3, sectionImg4];
const sectionFeatures = [
  [
    "Shirt, Tshirts ",
    "Jeans, Formals",
    "Watches",
    "Shoes, Sneakers",
    "Acessories",
    "Bags, Purse",
  ],
  [
    "Mobiles",
    "Chargers",
    "Earphones, Earbud",
    "Fans, Coolers ",
    "Mixers, Grinders",
    "Elcetric Kettel",
  ],
  ["Wahing Machine ", "DishWasher", "Fridge", "Nets", "Knife Set", "Power Kit"],
  [
    "Indian Books ",
    "Bookmark",
    "Toy Cars",
    "Stationary",
    "Speaking Toys",
    "International BestSeller",
  ],
];
const Sections = ({ item, idx }) => {
  const [leftShift, setleftShift] = useState("20%");
  const shiftR = ">";
  const shiftL = "<";
  return (
    <div className="sectionContainer">
      <div className="sectionsInfo" style={{ left: leftShift }}>
        {sectionFeatures[idx].map((item, index) => (
          <SectionFeature key={index} item={item} idx={index} firstidx={idx} />
        ))}
      </div>
      <div className="floating">
        <img className="img" src={imagesArr[idx]} />
        <div className="floating-floating">
          <h2 style={{ marginBottom: 5, textAlign: "center" }}>
            Best of {item}
          </h2>
          <Link to={"categories/" + item}>
            <button className="sectionBtn">View All</button>
          </Link>
        </div>
      </div>
      {leftShift === "20%" && (
        <div
          onClick={() => {
            setleftShift("-28%");
          }}
          style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
          className="navigatorRight"
        >
          <h1>{shiftR}</h1>
        </div>
      )}
      {leftShift !== "20%" && (
        <div
          onClick={() => {
            setleftShift("20%");
          }}
          style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
          className="navigatorLeft"
        >
          <h1>{shiftL}</h1>
        </div>
      )}
    </div>
  );
};

export default Sections;
