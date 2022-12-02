import styled from "styled-components";

export const PagesWrapper = styled.section`
  padding: 90px 10px 10px 10px;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  max-width: 1200px;

  .open__sidebar {
    top: 60px;
    z-index: 1;
    position: fixed;
    font-size: 2.5rem;
    color: var(--color-darkBlue);
  }

  @media screen and (min-width: 500px) {
    .open__sidebar {
      display: none;
    }
  }
`;
