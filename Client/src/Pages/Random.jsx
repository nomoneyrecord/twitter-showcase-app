import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default function Random() {
  const [selectTweeter, setSelectedTweeter] = useState(null);
  const [randomTweet, setRandomTweet] = useState(null); // New state to store random tweet

  const handleImageClick = async (tweeter) => {
    setSelectedTweeter(tweeter);
    try {
      const response = await axios.get("http://localhost:5173/api/random", {
        params: {
          username: tweeter,
        },
      });
      console.log(response.data);
      setRandomTweet(response.data);
    } catch (error) {
      console.error("Failed to fetch random tweet", error);
      setRandomTweet(null);
    }
  };

  return (
    <>
      <div className="random-header">
        <h3>Select one of my favorite tweeters and get a random tweet</h3>
      </div>
      <div className="container-tweeters">
        <img
          src="./images/Andrew-Huberman.jpeg"
          alt="Picture of Andrew Huberman"
          onClick={() => handleImageClick("hubermanlab")}
        />
        <img src="./images/Feifei-Li.jpeg" alt="Picture of Fei Fei Li" onClick={() => handleImageClick('drfeifei')} />
        <img src="./images/Elon-Musk.jpeg" alt="Picture of Elon Musk" onClick={() => handleImageClick('elonmusk')} />
        <img src="./images/Gwynne-Shotwell.jpeg" alt="Picture of Gwynne Shotwell" onClick={() => handleImageClick('Gwynne_Shotwell')} />
        <img src="./images/Jordan-Peterson.jpeg" alt="Picture of Jordan Peterson" onClick={() => handleImageClick('jordanbpeterson')} />
      </div>
      {randomTweet && (
        <div className="random-tweet">
          <h4>{randomTweet.username}</h4>
          <p>{randomTweet.text}</p>
        </div>
      )}
    </>
  );
}
