import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  z-index: 3;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1px);

  & > div {
    background-color: white;
    padding: 2rem;
    border: 1px solid #333;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 40rem;
    text-align: center;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        padding: 0.5rem 1.5rem;
        border-radius: 3px;
        font-size: 1.8rem;
        cursor: pointer;
      }

      .outline {
        border: 1px solid #091540;
        color: #091540;
      }

      .fill {
        background-color: #ff414e;
        color: white;
      }
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
      border: 1px solid black;
      padding: 0.5rem;
      cursor: pointer;
    }
  }
`;

export const Delete = styled.div`
  color: #aaa;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #ff414e;
  }
`;

export const ClearBtn = styled.div`
  padding: 0.5rem 1.5rem;
  background-color: #ff414e;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-left: 1.5rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;

  & > div {
    font-weight: 700;
    text-transform: capitalize;
  }

  & > button {
    padding: 1rem;
    border: 1px solid #aaa;
  }
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15rem;
  display: flex;
  justify-content: center;
`;

export const IsVip = styled.span`
  font-weight: 700;
  color: ${(props) => (props.isVip ? "green" : "#ff414e")};
`;

export const Container = styled.div`
  border: 1px solid #b5b7c0;
  border-radius: 8px;
  margin: 3rem 0;

  & > div:not(:last-child) {
    border-bottom: 1px solid #b5b7c0;
  }
`;

export const TableRow = styled.div`
  color: black;
  font-size: 1.6rem;
  padding: 1.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr 1fr 0.5fr;
  justify-content: space-between;

  & > .center {
    justify-self: center;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr 0.5fr;

    & :nth-child(3) {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const TableHeading = styled(TableRow)`
  color: #b5b7c0;
  font-weight: 700;
  font-size: 2.2rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
`;
