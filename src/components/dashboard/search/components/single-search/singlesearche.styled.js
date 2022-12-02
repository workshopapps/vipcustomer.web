import styled from "styled-components";

const SingleSearchWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .loading {
    .spinner {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: 2px solid red;
      margin: 0 auto;
    }

    p {
      margin-bottom: 10px;
      text-align: center;
    }
  }

  .spinner.stop {
    display: none;
  }

  section {
    margin-right: 30px;

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  .form {
    max-width: 500px;
    border: 1px solid;
    border-radius: 10px;
    padding: 10px;
    margin: 0 auto;
  }

  .form2 {
    .form__wrapper {
      border-radius: 15px;
      overflow: hidden;
      display: flex;

      input {
        border: 2px solid black;
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
        color: white;
      }
    }
  }
`;

export default SingleSearchWrapper;
