import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, handleSearchInputChange }) => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="Search"
        />
        <FaSearch className="search-button" />
      </div>
    </div>
  );
};

export default SearchBar;
