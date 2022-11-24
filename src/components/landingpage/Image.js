import React, { useState } from "react";
import { VideoWrapper, VideoContainer } from "./image.styled";
import PlayImage from "./assets/play.png";

const Image = () => {
  const [overlay, setOverlay] = useState(true);
  // temp function

  function handleWatchVideo() {
    setOverlay(false);
    console.log("I was clicked");
  }

  return (
    <VideoWrapper>
      <VideoContainer>
        <video></video>
        <div
          aria-hidden="true"
          className={`video__overlay ${overlay ? "" : "close"}`}>
          <h2>Want to get started?</h2>
          <p>
            Watch our <span>simple</span> Demo
          </p>
          <button onClick={handleWatchVideo}>
            <img src={PlayImage} alt="play button icon" />
          </button>
        </div>
      </VideoContainer>
    </VideoWrapper>
  );
};

export default Image;
