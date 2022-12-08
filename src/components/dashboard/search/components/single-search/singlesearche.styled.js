import styled from "styled-components";

const SingleSearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;

  section {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  .detailed__form {
    max-width: 400px;
    width: 100%;
    border: 1px solid;
    border-radius: 10px;
    padding: 10px;
    margin: 0 auto;
  }

  .quick__form {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;

    .form__wrapper {
      border-radius: 15px;
      overflow: hidden;
      display: flex;
      width: 100%;

      input {
        border: 2px solid black;
        width: 66%;
      }

      input,
      button {
        padding: 0px 10px;
        height: 44px;
      }

      input:first-of-type {
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
      }

      button {
        background-color: var(--color-orange);
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        color: white;
        width: 33%;
      }
    }
  }

  @media screen and (min-width: 930px) {
    flex-direction: row;

    section {
      margin: unset;
      margin-right: 50px;
    }
  }
`;

export default SingleSearchWrapper;
