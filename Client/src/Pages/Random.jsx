import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Random() {
  const [selectTweeter, setSelectedTweeter] = useState(null);

  const handleImageClick = (tweeter) => {
    setSelectedTweeter(tweeter);
    console.log(tweeter);
    //API request function will be here
  };

  return (
    <>
      <div className="random-header">
        <h3>Select one of my favorite tweeters and get a random tweet</h3>
      </div>
      <div className="container-tweeters">
        <div className="image-container">
          <img
            src="./images/Andrew-Huberman.jpeg"
            alt="Picture of Andrew Huberman"
            onClick={() => handleImageClick("hubermanlab")}
            style={{ height: "110px" }}
          />
          <span className="image-label">Andrew Huberman</span>
        </div>
        <div className="image-container">
          <img
            src="./images/Feifei-Li.jpeg"
            alt="Picture of Fei Fei Li"
            onClick={() => handleImageClick("drfeifei")}
            style={{ height: "110px" }}
          />
          <span className="image-label">Fei Fei Li</span>
        </div>
        <div className="image-container">
          <img
            src="./images/Elon-Musk.jpeg"
            alt="Picture of Elon Musk"
            onClick={() => handleImageClick("elonmusk")}
            style={{ height: "110px" }}
          />
          <span className="image-label">Elon Musk</span>
        </div>
        <div className="image-container">
          <img
            src="./images/Guido-van-Rossum.jpeg"
            alt="Picture of Guido van Rossum"
            onClick={() => handleImageClick("gvanrossum")}
            style={{ height: "110px" }}
          />
          <span className="image-label">Guido van Rossum</span>
        </div>
        <div className="image-container">
          <img
            src="./images/Jordan-Peterson.jpeg"
            alt="Picture of Jordan Peterson"
            onClick={() => handleImageClick("jordanbpeterson")}
            style={{ height: "110px" }}
          />
          <span className="image-label">Jordan Peterson</span>
        </div>
      </div>
    </>
  );
}
