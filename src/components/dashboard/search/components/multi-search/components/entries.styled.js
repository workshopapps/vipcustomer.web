import styled from "styled-components";

const EntriesWrapper = styled.div`
  width: 100%;
  max-height: 440px;
  margin: 0 auto;
  overflow-y: auto;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }

  /* gen classes */
  .f {
    display: flex;
  }
  .fcenter {
    justify-content: center;
    align-items: center;
  }

  .error {
    color: tomato;
    text-align: center;
    display: none;
  }

  .error.show {
    display: block;
  }

  button {
    width: 100%;
    height: 40px;
    padding: 12px 20px;
    color: white;
    background-color: var(--color-darkBlue);
    border: 1px solid var(--color-darkBlue);
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;

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
export default EntriesWrapper;

export const EntryWrapper = styled.div`
  margin-bottom: 10px;

  h3 {
    justify-content: space-between;
    cursor: pointer;
    width: 100%;

    small {
      font-size: 1.4rem;
      width: 75%;
    }

    .icon__wrap {
      justify-content: space-between;
      width: 25%;
    }

    .icon {
      transition: all 0.3s linear;
    }

    .icon.rotate {
      transform: rotate(180deg);
    }
  }

  .details {
    transition: all 0.3s linear;
    height: ${({ height }) => `${height}px`};
  }

  .details.close {
    height: 0;
    opacity: 0;
    overflow: hidden;
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
      width: max-content;
    }
  }
`;
