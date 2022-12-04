import styled from "styled-components";

export const DemoWrapper = styled.main`
  margin-top: 100px;

  /* general styles */

  .mt2 {
    margin-top: 20px;
  }
`;

export const Header = styled.div`
  h1 {
    max-width: 600px;
    margin: 0 auto;
    width: 95%;
  }

  h1,
  strong {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--Default-121212);
    padding-top: 1em;
    text-align: center;
  }

  strong {
    color: var(--color-orange);
  }

  @media screen and (min-width: 500px) {
    h1,
    strong {
      font-size: 3rem;
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      max-width: 650px;
    }

    h1,
    strong {
      font-size: 3.5rem;
    }
  }
`;

export const Body = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 40px;
  flex-direction: column;

  article {
    width: 95%;
    max-width: 700px;
    margin-bottom: 30px;
  }

  .form__wrapper {
    padding: 20px 15px;
    border: 1px solid #ced0d9;
    border-radius: 4px;

    h2 {
      font-weight: 500;
      font-size: 2.8rem;
      color: #091540;
      text-align: center;
    }

    p {
      text-align: center;
      color: var(--Default-121212);
      width: 90%;
      font-size: 1.6rem;
    }

    /* .......submit button....... */
  }

  .text__wrapper {
    padding: 10px;
    height: 100%;
    /* border-left: 2px solid var(--color-orange);
    border-top: 2px solid var(--color-orange); */
    box-shadow: -2px -2px 5px gray;

    h2,
    p {
      color: var(--Default-121212);
    }

    .header {
      font-weight: 600;
      font-size: 1.8rem;
      text-align: center;
    }

    .sub__text {
      text-align: center;
      font-size: 1.5rem;
      margin: 30px 0px;
    }

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 40px;
      font-size: 1.4rem;

      img {
        margin-right: 10px;
      }
    }
  }

  @media screen and (min-width: 500px) {
    .text__wrapper {
      padding: 15px;

      .header {
        font-size: 2.2rem;
      }

      .sub__text {
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;

    article {
      width: 48%;
    }
  }
`;
