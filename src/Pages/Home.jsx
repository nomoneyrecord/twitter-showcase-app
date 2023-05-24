import React from "react";

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
              <h3 >Search recent tweets</h3>
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
              <h3>
                Get a random tweet from 5 of my favorite minds
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="glow-btns">
        <div className="search-btn">
          <button class="glow-on-hover" type="button">
            Search
          </button>
        </div>
        <div className="random-btn">
          <button class="glow-on-hover" type="button">
            Random
          </button>
        </div>
      </div>
    </>
  );
}
