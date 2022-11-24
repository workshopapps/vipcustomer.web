import styled from "styled-components";

const PrivacyWrapper = styled.main`
  width: 100%;
  padding:5rem;
  background-color: #ffffff;
  font-family: "Poppins", sans-serif;
  line-height:40px;
  box-sizing:border-box;

  h2 {
    color: #091540;
    font-weight: bold;
  }

  h1 {
    color: #091540;
    font-weight: bolder;
    text-align: center;
    font-style: normal;
  }

  p {
    color: #000000;
    margin-top: 10px;
    font-size:18px;
  }
  .pbody{
    padding-top:1.5rem;
  }
  .txt{
    padding:2rem 10rem;
  }

  span {
    color: #121212;
    font-weight: bold;
  }

  div {
    padding:3rem 5rem;
  }
  div p {
    white-space: pre-line;
  }

  @media (max-width: 1024px) {
    padding:4rem 0;
    text-align:justify;

    h1{
      font-size:25px;
    }
    h2{
      font-size:20px;
    }
    .txt{
      padding:2.5rem;
    }
    div{
      padding:1.5rem;
    }
`;

export default PrivacyWrapper;
