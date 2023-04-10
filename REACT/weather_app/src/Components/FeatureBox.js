import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import "./FeatureBox.css";
const cities = ["Mumbai", "Delhi", "Chennai", "Kolkata", "Goa", "Bangalore"];
const FeatureBox = () => {
  const [isLoading, setisLoading] = useState(true);
  const [wdataArray, setwdataArray] = useState([]);
  const handleData = async (searchText) => {
    const link =
      "https://api.openweathermap.org/geo/1.0/direct?q=" +
      searchText +
      "&limit=1&appid=d3b892cda9c0a00c41a5c972ea8ceeda";

    const geoRes = await fetch(link);
    const geoData = await geoRes.json();
    const lat = geoData[0].lat;
    const lon = geoData[0].lon;
    const url =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=d3b892cda9c0a00c41a5c972ea8ceeda&units=metric";
    const weatherRes = await fetch(url);
    const weatherData = await weatherRes.json();
    return {
      name: geoData[0].name,
      temp: weatherData.main.temp,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
    };
  };
  const func = async (item) => {
    const data = await handleData(item);
    setwdataArray((prev) => [data, ...prev]);
  };
  useEffect(() => {
    console.log("useEffect it called");
    console.log(cities.length);
    cities.forEach((item) => {
      console.log("city->", item);
      func(item);
    });
    setisLoading(false);
  }, []);
  return (
    <div className="featureBoxContainer">
      {!isLoading &&
        wdataArray.map((item, index) => {
          return <WeatherCard key={index} wdata={item} />;
        })}
    </div>
  );
};

export default FeatureBox;
