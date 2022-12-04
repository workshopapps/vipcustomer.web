import styled from "styled-components";

const MultiSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
    margin: 50px 0px 20px 0px;
    font-size: 1.8rem;
  }

  .wrappers {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }

  .wrappers.entry {
    order: 1;
  }
  .wrappers.form {
    order: 2;
  }

  @media screen and (min-width: 930px) {
    flex-direction: row;

    .wrappers {
      margin-right: 30px;
      width: 50%;
    }

    .wrappers.entry {
      order: 2;
    }

    .wrappers.form {
      order: 1;
    }
  }
`;

export default MultiSearchWrapper;
