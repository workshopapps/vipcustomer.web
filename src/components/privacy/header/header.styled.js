import styled from "styled-components";

const HeaderWrapper = styled.main`
  background-color: #091540;
  padding: 1rem 5rem;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;

  .axeimg {
    width: 50%;
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .navlist a {
    margin-left: 20px;
  }

  .start {
    border: 1px solid #ffffff;
    padding: 0.5rem 1.2rem;
    border-radius: 10px;
  }

  .ham {
    display: none;
  }

  @media (max-width: 997px) {
    padding: 1rem 2rem;

    nav {
      display: none;
    }
    .ham {
      display: block;
      margin-left: auto;
    }
    .side {
      position: absolute;
      background-color: #091540;
      top: 5rem;
      left: 0;
      padding: 0 2rem 2rem 2rem;
      width: 100%;
    }
    .sidelist {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      margin-top: 5px;
    }
    .sidestart {
      width: 200px;
      text-align: center;
      border: 1px solid #ffffff;
      padding: 0.5rem;
      border-radius: 10px;
    }
  }
`;

export default HeaderWrapper;
