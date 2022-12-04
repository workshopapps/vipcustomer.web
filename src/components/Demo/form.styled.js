import styled from "styled-components";

const FormWrapper = styled.form`
  color: var(--Default-121212);

  .inputCon {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    max-width: 100%;
  }

  .inputCon * {
    margin-top: 5px;
  }

  .errorMsg {
    color: tomato;
  }

  .inputCon label {
    font-weight: 500;
    font-size: 1.4rem;
  }

  .inputCon input,
  .inputCon select {
    height: 44px;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1.5px solid var(--Default-121212);
  }

  .inputCon input.error,
  .inputCon select.error {
    border: 1px solid #f89687;
  }

  .inputCon input.error:hover,
  .inputCon select.error:hover {
    border: 1px solid #f89687;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #ffd3cc;
  }

  .inputCon input::placeholder {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  button {
    width: 100%;
    padding: 12px 20px;
    color: white;
    background-color: var(--color-darkBlue);
    border: 1px solid var(--color-darkBlue);
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
  }

  button:hover {
    background-color: var(--color-lightBlue);
  }

  /* on submit and loading */
  button.loading {
    background-color: var(--color-lightBlue);
    border: 1px solid var(--color-lightBlue);
  }

  @media screen and (min-width: 500px) {
    .wrapInput {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .wrapInput div {
      width: 48%;
    }
  }
`;

export default FormWrapper;
