import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <div className="header">
        <h1 className="main-head">TWITTER SHOWCASE</h1>
        <h4 className="sub-head">
          A simple twitter app to filter out the noise
        </h4>
      </div>
      <div className="flip-container">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                className="magnifier"
                src="./images/magnifying-glass.png"
                alt="magnifying glass with search word"
              />
            </div>
            <div className="flip-box-back">
              <h3 className="search-back">Search recent tweets</h3>
            </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                className="question-mark"
                src="./images/speech-bubble.png"
                alt=""
              />
            </div>
            <div className="flip-box-back">
              <h3 className="random-back">
                Get a random tweet from 5 of my favorite minds
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="glow-btns">
        <div className="search-btn-home">
          <a href="/Search">
          <button id="glow-button-search" className="glow-on-hover" type="button">
            Search
          </button>
          </a>
        </div>
        <div className="random-btn">
          <a href="/Random">
          <button id="glow-button-random" className="glow-on-hover" type="button">
            Random
          </button>
          </a>
        </div>
      </div>
    </>
  );
}
