import styled from "styled-components";

export const SideBarWrapper = styled.section`
  border: 1px solid #858585;
  background-color: white;
  padding-top: 80px;
  width: 200px;
  position: fixed;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  /* only on screens less than 500px */
  transition: translateX 0.3s linear;
  transform: ${({ close }) =>
    close ? "translateX(-100%)" : "translateX(0px)"};

  @media screen and (min-width: 500px) {
    width: 100px;
    position: sticky;
    transform: translateX(0);
  }

  @media screen and (min-width: 1200px) {
    width: 30%;
    min-width: 250px;
    max-width: 250px;
    position: sticky;
  }
`;

export const LinksContainer = styled.div`
  padding-left: 20px;
  /* display: flex; */
  flex-direction: column;
  justify-content: space-around;
  /* height: calc(100% - 212px); */
  border: 2px solid red;

  .link__wrap {
  }

  a,
  div {
    padding: 5px 10px;
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .text {
    font-size: 30px;
    flex: 0.8;
  }
  .icon {
    padding-left: 10px;
  }
  .active {
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.bg};
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
`;
