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
  max-width: 750px;
  margin: 0 auto;
  aspect-ratio: 16/9;
  height: 100%;
  position: relative;
  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: pink;
  }

  .video__overlay {
    background: #091540;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    visibility: visible;
    z-index: 2;
    transition: all 0.3s linear;
    color: white;

    button {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      position: absolute;
      opacity: 0.65;
      z-index: 2;
    }

    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.3rem;
    }

    img {
      width: 100%;
      height: 100%;
    }

    @media screen and (min-width: 500px) {
      h2 {
        font-size: 2.8rem;
      }
      p {
        font-size: 2rem;
      }
    }
  }

  .video__overlay.close {
    opacity: 0;
    visibility: hidden;
  }

  .vid__link {
    color: teal;
    font-size: 1.6rem;
  }

  .vid__text {
    font-size: 1.6rem;
    text-align: center;
    color: var(--color-dark);
  }
`;

export { VideoWrapper, VideoContainer };
