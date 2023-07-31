import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tweets, setTweets] = useState([]);
  const [searched, setSearched] = useState(null);

  const inputRef = useRef();

  useEffect(() => {
    if (searched) {
      getTweets();
    }
  }, [searched]);

  const getTweets = async () => {
    try {
      const response = await axios.get("http://localhost:5173/api/tweets", {
        params: {
          username: searchTerm,
        },
      });
      console.log(response.data);
      setTweets(response.data);
      setSearched(true);
    } catch (error) {
      console.error("Failed to fetch tweets", error);
      setTweets([]);
      setSearched(true);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearched(false);
    getTweets();
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
      {searched === true && tweets.length > 0 && (
        <div className="tweet-cards">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="card mb-3">
              <div className="card-header d-flex align-items-center">
                {tweet.profile_image_url_https && (
                  <img
                    src={tweet.profile_image_url_https}
                    alt="Profile"
                    className="profile-image img-fluid rounded-circle me-2"
                    style={{ maxWidth: "40px" }}
                  />
                )}
                <h4 className="mb-0">{tweet.username}</h4>
              </div>
              <div className="card-body">
                <p>{tweet.text}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <div>
                  <span className="me-2">Likes: {tweet.like_count}</span>
                  <span>Retweets: {tweet.retweet_count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
