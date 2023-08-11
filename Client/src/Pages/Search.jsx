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

      if (response.data.length === 0) {
        // If the response data is an empty array, it means no tweets were found for the given username
        setTweets([]);
        setSearched(true);
      } else {
        setTweets(response.data);
        setSearched(true);
      }
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
            placeholder="enter username"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
      {searched === true && tweets.length > 0 ? (
  <div className="tweet-cards">
    {tweets.map((tweet) => (
      <div key={tweet.id} className="card mb-3">
        <div className="card-header d-flex align-items-center">
          {tweet.profile_image_url && (
            <img
              src={tweet.profile_image_url}
              alt="Profile"
              className="profile-image img-fluid rounded-circle me-2"
              style={{ maxWidth: "40px" }}
            />
          )}
          <h4 className="mb-0">{tweet.username}</h4>
        </div>
        <div className="card-body">
          <p>{tweet.text}</p>

          {/* Render attached media */}
          {tweet.media_urls && tweet.media_urls.map((url, index) => (
            <img key={index} src={url} alt="Tweet Media" className="tweet-media img-fluid rounded mt-2" />
          ))}
        </div>
        <div className="card-footer d-flex justify-content-between">
          <div>
            <img
              src="/images/like_icon.png"
              alt="Like Icon"
              className="icon-img"
            />
            <span className="me-2">{tweet.like_count}</span>
            <img
              src="/images/retweet_icon.png"
              alt="Retweet Icon"
              className="icon-img"
            />
            <span>{tweet.retweet_count}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
) : searched === true ? (
  <div className="no-tweets-container">
    <div className="no-tweets-message">
      Please use a valid username
    </div>
  </div>
) : null}
    </>
  );
}
