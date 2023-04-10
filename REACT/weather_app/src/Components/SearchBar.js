import React from "react";
import SearchIcon from "../Util/SearchIcon";
import "./SearchBar.css";
const SearchBar = ({ sendSearchText, value }) => {
  return (
    <div className="searchBarContainer">
      <input
        type="text"
        placeholder="Enter A City Name..."
        onChange={(e) => sendSearchText(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
