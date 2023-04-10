import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import { useState } from "react";
import Fallback from "./Components/Fallback";
import FeatureBox from "./Components/FeatureBox";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [searchText, setsearchText] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [wdata, setwdata] = useState();
  const handleSearchText = (text) => {
    setsearchText(text);
  };
  const handleClick = async () => {
    if (searchText.trim().length === 0) {
      alert("Please bnter a valid city!");
      setsearchText("");
      return;
    }
    const link =
      "https://api.openweathermap.org/geo/1.0/direct?q=" +
      searchText +
      "&limit=1&appid=d3b892cda9c0a00c41a5c972ea8ceeda";
    console.log(link);
    const geoRes = await fetch(link);
    const geoData = await geoRes.json();
    if (
      geoData.length === 0 ||
      geoData[0].name.toLowerCase() !== searchText.toLowerCase()
    ) {
      alert("Please bnter a valid city!");
      setsearchText("");
      return;
    }
    setisLoading(true);
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
    setwdata({
      name: geoData[0].name,
      temp: weatherData.main.temp,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
    });
    setsearchText("");
    setisLoading(false);
    setShowCard(true);
  };
  return (
    <div className="container">
      <SearchBar value={searchText} sendSearchText={handleSearchText} />
      <button onClick={handleClick}>Enter</button>
      {isLoading && <Fallback />}
      {!isLoading && showCard && (
        <WeatherCard extraText="Weather in " wdata={wdata} />
      )}
      <div className="line">
        <div className="text">
          <h2>Most Searched Cities</h2>
        </div>
      </div>
      <FeatureBox />
    </div>
  );
}

export default App;
