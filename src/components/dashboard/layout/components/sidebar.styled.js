import styled from "styled-components";

export const SideBarWrapper = styled.section`
  border: 1px solid #858585;
  background-color: white;
  padding-top: 80px;
  padding-right: 10px;
  width: 220px;
  position: fixed;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;

  /* only on screens less than 500px */
  transition: translateX 0.3s linear;
  transform: ${({ close }) =>
    close ? "translateX(0px)" : "translateX(-100%)"};

  .close__btn {
    text-align: center;
    width: calc(100% - 10px);
    font-size: 3rem;
    margin-bottom: 30px;
    margin-left: 10px;
  }

  @media screen and (min-width: 500px) {
    width: 100px;
    position: sticky;
    transform: translateX(0);

    .close__btn {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 30%;
    min-width: 220px;
    max-width: 220px;
    position: sticky;
  }
`;

export const LinksContainer = styled.div`
  padding-left: 20px;
  flex-direction: column;
  justify-content: space-around;

  .isActive .link__wrap {
    border: 2px solid var(--color-lightBlue);
    /* background-color: var(--color-lightBlue);
    color: white; */
  }

  .link__wrap {
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding: 5px 10px;
    height: 44px;
    margin-bottom: 25px;

    /* background-color: inherit;
    transition: background 0.1s linear; */

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      margin-right: 15px;
    }

    .text {
      position: relative;
      text-transform: capitalize;
      font-size: 1.8rem;
      width: max-content;
    }
  }

  @media screen and (min-width: 500px) {
    .link__wrap {
      .icon {
        margin-right: 0;
      }

      .text {
        visibility: hidden;
        width: 0;
      }

      /* tooltips => hidden on  a default */
      .text::before {
        transform-origin: center;
        visibility: hidden;
        left: 30px;
        padding: 2px 10px;
        border-radius: 10px;
        position: absolute;
        content: attr(data-text);
        background-color: gray;
        color: white;
        box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.1),
          -2px -2px 7px rgba(0, 0, 0, 0.1);
        z-index: 10;
        font-size: 1.5rem;
        width: max-content;
        text-transform: capitalize;
      }

      .text::after {
        transform-origin: center;
        visibility: hidden;
        content: " ";
        position: absolute;
        top: calc(50%);
        left: 11px;
        transform: translateY(-50%);
        border-width: 8px;
        border-style: solid;
        border-color: transparent rgba(0, 0, 0, 0.1) transparent transparent;
      }
    }

    /* show tooltip only when the parent is hovered */
    .link__wrap:hover .text::before,
    .link__wrap:hover .text::after {
      visibility: visible;
      transform-origin: center;
      transition: visibility 0.3s linear;
    }
  }

  @media screen and (min-width: 1200px) {
    .link__wrap {
      .icon {
        margin-right: 15px;
      }

      .text {
        visibility: visible;
        width: max-content;
      }
    }

    .link__wrap:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14);
    }

    /* hide tooltip even when hvered */
    .link__wrap:hover .text::before,
    .link__wrap:hover .text::after {
      visibility: hidden;
    }
  }
`;
