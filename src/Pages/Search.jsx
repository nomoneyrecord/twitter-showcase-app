import React from "react";

export default function Search() {
  return (
    <>
      <div className="header">
        <h3>Search the most recent tweets</h3>
      </div>
      <input className="input" type="text" placeholder="enter keyword"/>
      <button>Search</button>
    </>
  );
}
