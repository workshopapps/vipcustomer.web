import React from "react";
import DATA_IMAGE from "../general/assests/images/data.png";
import { VideoWrapper, VideoContainer } from "./image.styled";

const Image = () => {
  return (
    <VideoWrapper>
      <VideoContainer>
        <video></video>
      </VideoContainer>
    </VideoWrapper>
  );
};

export default Image;
