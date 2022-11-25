import styled from "styled-components";

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  background: rgba(0, 0, 0, 0.3);
  display: ${({ modal }) => (modal ? "block" : "none")};
  /*  */
  .modal-body {
    position: relative;
    border: 2px solid ${({ theme }) => theme.color};
    width: 95%;
    top: 50%;
    left: 50%;
    transform: translateX(-70%) translateY(-70%);
    border-radius: 15px;
    word-break: break-all;
    background-color: white;
    /* word-wrap: break-word; */
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: modal 0.3s linear forwards;
  }
  @keyframes modal {
    100% {
      transform: translateX(-50%) translateY(-50%);
    }
  }

  .modal-body .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    width: 100%;
  }

  .modal-body .header h2 {
    color: var(--color-orange);
  }

  .modal-body .modal-btn {
    font-weight: 300;
    font-size: 2rem;
    width: 30px;
    color: ${({ theme }) => theme.color};
    /* align-self: flex-end; */
  }

  @media screen and (min-width: 576px) {
    .modal-body {
      width: 70%;
    }
  }
  @media screen and (min-width: 576px) {
    .modal-body {
      width: 70%;
    }
  }

  @media screen and (min-width: 768px) {
    .modal-body {
      width: 60%;
    }
  }

  @media screen and (min-width: 992px) {
    .modal-body {
      width: 50%;
    }
  }
  @media screen and (min-width: 1200px) {
    .modal-body {
      width: 35%;
    }
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  padding: 0 0.7em 0.7em 0.7em;
  /* border: 2px solid red; */

  h2 {
    color: var(--color-darkBlue);
    text-align: center;
    text-decoration: underline;
    margin-bottom: 10px;
  }
  .capitalize {
    text-transform: capitalize;
  }
  .not__found {
    text-align: center;
  }

  .results,
  .search {
    padding: 10px;
  }

  .search {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .row {
    display: flex;
    align-items: center;

    small {
      width: 7px;
      height: 7px;
      background-color: var(--color-orange);
      border-radius: 50%;
      margin-right: 10px;
    }

    span {
      width: max-content;
      width: 100px;
      font-size: 1.6rem;
      font-weight: 600;
    }

    p {
      font-size: 1.6rem;
      width: max-content;
    }

    .vip {
      font-weight: 500;
      display: flex;
      align-items: center;

      p {
        width: max-content;
      }

      div {
        font-size: 1.6rem;
        margin-left: 20px;
      }
    }

    .vip.vip_green {
      color: green;
    }

    .vip.vip_red {
      color: tomato;
    }
  }
`;

// border: 2px solid red;
