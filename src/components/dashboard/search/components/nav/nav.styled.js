import styled from "styled-components";

const NavWrapper = styled.div`
  .heading {
    color: var(--color-darkBlue);
    text-align: center;
    text-decoration: underline;
    font-size: 2.2rem;
  }

  .nav {
    max-width: 780px;
    display: flex;
    overflow-x: auto;
    margin: 0 auto;
    margin-top: 20px;

    p {
      font-size: 1.4rem;
      width: 33%;
      min-width: max-content;
      padding: 10px;
      text-align: center;
      border: 2px solid;
      text-transform: capitalize;
      cursor: pointer;
    }

    p.current {
      background-color: var(--color-darkBlue);
      border: 2px solid var(--color-darkBlue);
      color: white;
    }
  }

  @media screen and (min-width: 500px) {
    .nav {
      p {
        font-size: 1.8rem;
      }
    }
  }
`;
export default NavWrapper;
