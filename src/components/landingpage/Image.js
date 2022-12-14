import React, { useState, useRef } from "react";
import { VideoWrapper, VideoContainer } from "./image.styled";
import PlayImage from "./assets/play.png";

const Image = () => {
  const [overlay, setOverlay] = useState(true);
  const videoRef = useRef(null);

  function handleWatchVideo() {
    setOverlay(false);
    videoRef.current.play();

    function onVideoEnd() {
      if (videoRef.current.ended) {
        setOverlay(true);
      }
    }

    videoRef.current.removeEventListener("timeupdate", onVideoEnd);
    videoRef.current.addEventListener("timeupdate", onVideoEnd);
  }

  return (
    <VideoWrapper>
      <VideoContainer>
        <video ref={videoRef} controls>
          <source src={require("./assets/starfinder.webm")} type="video/webm" />

          <p className="vid__text">
            Your browser does not support webm video formats <br />
            Please{" "}
            <a
              className="vid__link"
              href={require("./assets/starfinder.webm")}
              download="Star finder">
              Downlod
            </a>{" "}
            Video instead
          </p>
        </video>

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
