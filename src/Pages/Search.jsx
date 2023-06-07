import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef();

  const handleInputChange = () => {
    setSearchTerm(inputRef.current.value);
  };

  const handleSearch = () => {
    console.log("Search term is : ", searchTerm);
    //API request functon should be called here, apiRequest(searchTerm);
  };

  return (
    <>
      <div className="search-header">
        <h3>Search the most recent tweets</h3>
      </div>
      <div className="input-container">
        <input
          ref={inputRef}
          id="search-input"
          className="input"
          type="text"
          placeholder="enter keyword"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    </>
  );
}
