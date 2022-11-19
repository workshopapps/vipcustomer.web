import styled from "styled-components";

export const FormStyled = styled.form`
  border: 1px solid #848a9f;
  padding: 1.25rem 1.875rem 3.125rem;
`;

export const ConsultStyled = styled.section`
  width: 80%;
  margin-inline: auto;

  @media only screen and (min-width: 768px) {
    width: 70%;
    @media screen and (min-width: 992px) {
      width: 60%;
    }
  }

  h1,
  p {
    text-align: center;
    color: #121212;
  }

  p {
    padding-block: 1.1rem 2rem;
  }
`;

export const BtnContainer = styled.div`
  margin-top: 2.34rem;
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    width: fit-content;
    margin-right: auto;
  }

  button {
    padding: 0.5rem 1.43rem;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 8px;

    &.submit {
      background: #091540;
      box-shadow: 0px 1.16791px 2.33582px rgba(0, 0, 0, 0.14);
      color: #fff;
    }

    &.reset {
      border: 1px solid #848aa0;
      color: #848aa0;
    }
  }
`;
