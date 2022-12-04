import styled from "styled-components";

const LoadingWraper = styled.div`
  .loading {
    .spinner {
      margin: 0 auto;
    }

    p {
      margin-bottom: 10px;
      text-align: center;
    }
  }

  .loading.stop p {
    display: none;
  }
`;

export default LoadingWraper;
