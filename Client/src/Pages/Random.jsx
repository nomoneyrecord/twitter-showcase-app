import React, { useState }from "react"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Random() {

  const [selectTweeter, setSelectedTweeter] = useState(null);

  const handleImageClick = (tweeter) => {
    setSelectedTweeter(tweeter);
    console.log(tweeter);
    //API request function will be here 
  }


  return (
    <>
      <div className="random-header">
        <h3>Select one of my favorite tweeters and get a random tweet</h3>
      </div>
      <div className="container-tweeters">
      <img src="./images/Andrew-Huberman.jpeg" alt="Picture of Andrew Huberman" onClick={() => handleImageClick('hubermanlab')} />
        <img src="./images/Feifei-Li.jpeg" alt="Picture of Fei Fei Li" onClick={() => handleImageClick('Fei Fei Li')} />
        <img src="./images/Elon-Musk.jpeg" alt="Picture of Elon Musk" onClick={() => handleImageClick('Elon Musk')} />
        <img src="./images/Gwynne-Shotwell.jpeg" alt="Picture of Gwynne Shotwell" onClick={() => handleImageClick('Gwynne Shotwell')} />
        <img src="./images/Jordan-Peterson.jpeg" alt="Picture of Jordan Peterson" onClick={() => handleImageClick('Jordan Peterson')} />
        
      </div>
    </>
  )
}