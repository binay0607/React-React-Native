import React from "react";
import "./WeatherCard.css";
const WeatherCard = ({ wdata ,extraText}) => {
  const iconurl = "http://openweathermap.org/img/wn/" + wdata.icon + "@4x.png";
  return (
    <div className="weatherCardContainer">
      <h3 className="heading">{extraText} {wdata.name}</h3>
      <div className="weatherInfo">
        <div className="imgContainer">
          <img
            width={120}
            height={100}
            style={{ marginLeft: 30 }}
            src={iconurl}
          />
        </div>
        <div className="infoContainer">
          <h1 className="temp">{wdata.temp}°</h1>
          <h3 className="description">{wdata.description}</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
