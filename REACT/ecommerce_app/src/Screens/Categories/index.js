import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { mobileData } from "../../Data/data";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

const Categories = () => {
  const [selectedBrands, setSelectedBrands] = useState([
    "Iphone",
    "OnePlus",
    "Oppo",
    "Realme",
    "Redmi",
    "Samsung",
    "Vivo",
  ]);
  const params = useParams();
  let showData = mobileData.reduce((acc, item) => {
    return acc.concat(item.mobiles);
  }, []);
  showData = showData.filter((item) => selectedBrands.includes(item.catName));
  if (showData.length === 0) {
    setSelectedBrands([
      "Iphone",
      "OnePlus",
      "Oppo",
      "Realme",
      "Redmi",
      "Samsung",
      "Vivo",
    ]);
  }
  console.log(showData);
  if (params.category !== "Mobiles") {
    return <div>{params.category}</div>;
  }
  const handleBrands = (brands) => {
    setSelectedBrands(brands);
  };
  return (
    <div className="categoriesContainer">
      <Filter sendBrands={handleBrands} />
      <div className="productsContainer">
        {showData.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
