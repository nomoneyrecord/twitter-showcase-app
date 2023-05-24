import React from "react";

export default function Home() {
  return (
    <>
      <div className="header">
        <h1 className="main-head">TWITTER SHOWCASE</h1>
        <h4 className="sub-head">A simple twitter app to filter out the noise</h4>
      </div>
      <div className="flip-container">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="magnifier" src="./images/magnifying-glass.png" alt="magnifying glass with search word" />
            </div>
            <div className="flip-box-back">
              <h3>Click the search button to explore recents tweets</h3>
            </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="question-mark" src="./images/blue-question-mark.png" alt="" />
            </div>
            <div className="flip-box-back">
              <h3>Click the button below to search tweets through my top 5 tweeters</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
