import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tweets, setTweets] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = async () => {
    try {
      const response = await axios.get("http://localhost:5173/api/tweets", {
        params: {
          q: searchTerm,
        },
      });
      console.log(response.data);
      setTweets(response.data);
    } catch (error) {
      console.error("Failed to fetch tweets", error);
    }
  };

  const handleInputChange = () => {
    setSearchTerm(inputRef.current.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getTweets();
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
      <div className="tweet-cards">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="card">
            <h4>{tweet.username}</h4>
            <p>{tweet.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
