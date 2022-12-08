import styled from "styled-components";

const CsvWrapper = styled.main`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  article {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  /* gen classes */
  .f {
    display: flex;
  }

  .fcenter {
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;

    article {
      margin: unset;
      margin-right: 50px;
    }
  }
`;

export const UploadcsvWrapper = styled.article`
  /* border: 2px solid red; */

  h2 {
    text-align: center;
  }

  .upload__div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px dashed gray;
    max-width: 270px;
    padding: 5px;
    width: 100%;
    margin: 20px auto;
    background-color: whitesmoke;
    overflow: hidden;

    .icon {
      font-size: 3.5rem;
    }

    .file {
      color: gray;
      font-size: 1.3rem;
      font-style: italic;
    }

    p {
      font-weight: 600;
      color: var(--color-darkBlue);
      margin-top: 10px;
      font-size: 1.4rem;
    }
  }

  .error {
    text-align: center;
    color: tomato;
    font-size: 1.4rem;
  }

  button {
    margin: 0 auto;
    margin-top: 30px;
    max-width: 270px;
    width: 100%;
    border-radius: 8px;
    color: white;
    padding: 10px 20px;
    background-color: var(--color-darkBlue);

    span {
      margin: 0px 4px;
    }

    .icon {
      font-size: 2rem;
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--color-lightBlue);
  }
`;

export const InstructionsWrapper = styled.article`
  h2 {
    margin-bottom: 10px;
    text-align: center;
  }

  .instruction {
    margin-bottom: 20px;
  }

  .row {
    display: flex;
    align-items: center;

    small {
      width: 7px;
      height: 7px;
      background-color: var(--color-orange);
      border-radius: 50%;
      margin-right: 10px;
    }

    span {
      width: max-content;
      width: 100px;
      font-size: 1.6rem;
      font-weight: 600;
    }

    p {
      font-size: 1.6rem;
      width: 100%;
      font-style: italic;
      text-align: center;
    }
  }

  .button {
    margin: 0 auto;
    margin-top: 20px;
    max-width: 270px;
    width: 100%;
    border-radius: 8px;
    color: white;
    height: 40px;
    background-color: var(--color-darkBlue);
    font-size: 1.4rem;
  }
`;

export default CsvWrapper;
