import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";
const CategoryCard = ({ item }) => {
  return (
    <div className="categoryCardContainer">
      <Link
        to={"categories/" + item.name}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img className="catImg" src={item.imgUrl} />
      </Link>
      <p className="catName">{item.name}</p>
    </div>
  );
};

export default CategoryCard;
