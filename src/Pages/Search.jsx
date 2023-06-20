import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef();

  const handleInputChange = () => {
    setSearchTerm(inputRef.current.value);
  };

  const handleSearch = (e) => {
    console.log(searchTerm);
    e.preventDefault()
    //API request functon should be called here, apiRequest(searchTerm);
    setSearchTerm("");
  };


  return (
    <>
      <div className="search-header">
        <h3>Search the most recent tweets</h3>
      </div>
      <div className="input-container">
        <form onSubmit={handleSearch}>
        <input
          ref={inputRef}
          id="search-input"
          className="input"
          type="text"
          placeholder="enter keyword"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
        </form>
      </div>
    </>
  );
}
