import React from "react";

export default function Search() {
  return (
    <>
      <div className="search-header">
        <h3>Search the most recent tweets</h3>
      </div>
      <div className="input-container">
      <input className="input" type="text" placeholder="enter keyword"/>
      <button className="search-btn">Search</button>
      </div>
    </>
  );
}
