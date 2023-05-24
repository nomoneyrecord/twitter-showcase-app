import React from "react";

export default function Home() {
  return (
    <>
      <div className="header">
        <h1 className="main-head">TWITTER SHOWCASE</h1>
        <h4 className="sub-head">A simple twitter app to filter out the noise</h4>
      </div>
      <div className="flip-container">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <h2>Front Side</h2>
            </div>
            <div class="flip-box-back">
              <h2>Back Side</h2>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <h2>Front Side</h2>
            </div>
            <div class="flip-box-back">
              <h2>Back Side</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
