import styled from "styled-components";

const NavWrapper = styled.nav`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 10;
  font-size: 1.6rem;
  color: white;
  font-weight: 500;
  display: flex;
  height: 50px;
  padding-inline: ${({ mobile, tablet }) =>
    mobile ? "40px" : tablet ? "78.9px" : "120px"};
  width: 100%;
  background: #091540;
  box-shadow: ${({ scroll, menuopen }) =>
    scroll && !menuopen && "1px 2px 5px rgba(1,1,1,.3)"};
`;

const NavItemsWrapper = styled.ul`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div`
  width: 100%;
  height: 50px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Items = styled.li`
  display: flex;
  gap: 40px;

  align-items: center;
  &.nav--link--items {
    display: ${({ tablet }) => tablet && "none"};
  }
  & > a {
    transition: 200ms all ease-in-out;
    display: flex;
  }
  & > a.active {
    color: #c04a1c;
  }
`;

const MobileNavWrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  background: #091540;
  display: flex;
  flex-direction: column;
  gap: 10px;
  top: 100%;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 28px;
  overflow-y: hidden;
  transition: 300ms 0.2s all ease-in-out;
  height: 0px;
  box-shadow: ${({ tablet }) => tablet && "1px 2px 5px rgba(1,1,1,.3)"};
  padding-inline: ${({ mobile, tablet }) =>
    mobile ? "40px" : tablet ? "78.9px" : "120px"};
  &.open {
    height: 225px;
    max-height: fit-content;
  }
  & > a.active {
    transition: 200ms all ease-in-out;
    color: #c04a1c;
  }
`;
export { NavItemsWrapper, NavWrapper, LogoWrapper, Items, MobileNavWrapper };
