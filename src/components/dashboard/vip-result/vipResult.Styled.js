import styled from "styled-components";

export const ResultsWrapper = styled.section`
  max-width: 1446px;
  width: 100%;
  padding: 10px;

  .wrapper__container {
    padding: 7px;
    height: 600px;
    border: 1px solid #adb1bf;
    overflow-x: auto;
    border-radius: 12px;
  }
`;

export const WrapperRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
`;
