import React from "react"

export default function Random() {
  return (
    <>
      <div className="random-header">
        <h3>Select one of my favorite tweeters and get a random tweet</h3>
      </div>
      <div className="random-tweeters">
        <img src="./images/Andrew-Huberman.jpeg" alt="Picture of Andrew Huberman" />
        <img src="./images/Feifei-Li.jpeg" alt="Picture of Fei Fei Li" />
        <img src="./images/Elon-Musk.jpeg" alt="Picture of Elon Musk" />
        <img src="./images/Gwynne-Shotwell.jpeg" alt="Picture of Gwynne Shotwell" />
        <img src="./images/Jordan-Peterson.jpeg" alt="Picture of Jordan Peterson" />
      </div>
    </>
  )
}