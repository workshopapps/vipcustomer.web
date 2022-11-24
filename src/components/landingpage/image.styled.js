import styled from "styled-components";

const VideoWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  @media (max-width: 1024px) {
    padding: 22px;
  }
`;

const VideoContainer = styled.div`
  max-width: 982px;
  width: 100%;
  max-height: 742px;
  height: 100%;
  & > video {
    background: green;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export { VideoWrapper, VideoContainer };
