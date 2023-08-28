import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Random() {
  const [selectTweeter, setSelectedTweeter] = useState(null);
  const [randomTweet, setRandomTweet] = useState(null);

  const handleImageClick = (tweeter) => {
    setSelectedTweeter(tweeter);
  };

  useEffect(() => {
    const getRandomTweet = async () => {
      if (selectTweeter) {
        try {
          const response = await axios.get(
            `/api/tweets`,
            {
              params: {
                username: selectTweeter,
              },
            }
          );

          if (response.data.length > 0) {
            const randomIndex = Math.floor(Math.random() * Math.min(10, response.data.length));
            setRandomTweet(response.data[randomIndex]);
          } else {
            setRandomTweet(null);
          }
        } catch (error) {
          console.error("Failed to fetch tweets", error);
          setRandomTweet(null);
        }
      }
    };

    getRandomTweet();
  }, [selectTweeter]);

  return (
    <>
      <div className="random-header">
        <h3>Select one of my favorite tweeters and get a random tweet</h3>
      </div>
      <div className="container-tweeters">
        <div className="image-container">
          <div className="image-container-huberman">
          <img
            src="./images/Andrew-Huberman.jpeg"
            alt="Picture of Andrew Huberman"
            onClick={() => handleImageClick("hubermanlab")}
            style={{ height: "110px" }}
          />
          </div>
          <span className="image-label">Andrew Huberman</span>
        </div>
        <div className="image-container">
          <div className="image-container-lei">
          <img
            src="./images/Feifei-Li.jpeg"
            alt="Picture of Fei Fei Li"
            onClick={() => handleImageClick("drfeifei")}
            style={{ height: "110px" }}
          />
          </div>
          <span className="image-label">Fei Fei Li</span>
        </div>
        <div className="image-container">
          <div className="image-container-musk">
          <img
            src="./images/Elon-Musk.jpeg"
            alt="Picture of Elon Musk"
            onClick={() => handleImageClick("elonmusk")}
            style={{ height: "110px" }}
          />
          </div>
          <span className="image-label">Elon Musk</span>
        </div>
        <div className="image-container">
        <div className="image-container-guido">
          <img
            src="./images/Guido-van-Rossum.jpeg"
            alt="Picture of Guido van Rossum"
            onClick={() => handleImageClick("gvanrossum")}
            style={{ height: "110px" }}
          />
          <span className="image-label">Guido van Rossum</span>
        </div>
        </div>
        <div className="image-container">
          <div className="image-container-peterson">
          <img
            src="./images/Jordan-Peterson.jpeg"
            alt="Picture of Jordan Peterson"
            onClick={() => handleImageClick("jordanbpeterson")}
            style={{ height: "110px" }}
          />
          </div>
          <span className="image-label">Jordan Peterson</span>
        </div>
      </div>
      <div className="tweet-cards">
  {randomTweet && (
    <div key={randomTweet.id} className="card mb-3">
      <div className="card-header d-flex align-items-center">
        {randomTweet.profile_image_url && (
          <img
            src={randomTweet.profile_image_url}
            alt="Profile"
            className="profile-image img-fluid rounded-circle me-2"
            style={{ maxWidth: "40px" }}
          />
        )}
        <h4 className="mb-0">{randomTweet.username}</h4>
      </div>
      <div className="card-body">
        <p>{randomTweet.text}</p>

        {randomTweet.media_urls && randomTweet.media_urls.map((url, index) => (
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
          <span className="me-2">{randomTweet.like_count}</span>
          <img
            src="/images/retweet_icon.png"
            alt="Retweet Icon"
            className="icon-img"
          />
          <span>{randomTweet.retweet_count}</span>
        </div>
      </div>
    </div>
  )}
</div>
    </>
  );
}


