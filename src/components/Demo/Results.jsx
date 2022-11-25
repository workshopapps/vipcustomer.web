import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Results({
  name,
  gender,
  occupation,
  age,
  isVip,
  vipScore
}) {
  const [modal, setModal] = React.useState(true);

  function handleModal() {
    setModal(!modal);
  }
  return (
    <>
      {modal && (
        <>
          <Modal>
            <div onClick={handleModal} className="cancel-button">
              X
            </div>
            <div className="name">{name}</div>
            <div className="others">
              <div>
                Gender: <span>{gender}</span>
              </div>
              <div>
                occupation: <span>{occupation}</span>
              </div>
              <div>
                age: <span>{age}</span>
              </div>
              <div>
                vip: <span>{isVip ? "yes" : "no"}</span>
              </div>
              <div>
                vipScore: <span>{vipScore || "not available"}</span>
              </div>
            </div>
          </Modal>
          <Overlay onClick={handleModal} className="overlay"></Overlay>{" "}
        </>
      )}
    </>
  );
}

Results.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  occupation: PropTypes.string,
  age: PropTypes.string,
  isVip: PropTypes.string,
  vipScore: PropTypes.string
};

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  background: rgba(64, 64, 64, 0.3);
`;

const Modal = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  max-width: 420px;
  background-color: white;
  padding-bottom: 10px;

.name {
  font-weight: 700;
  font-size: 3.2rem;
  color: #121212;
  margin-bottom: 3rem;
  justify-content: center;
  text-align: center;
}
.cancel-button{
    font-size: 3rem;
    font-weight: 100;
    // display: none;
    padding-left:1rem;
    padding-top:1rem

  }
.cancel-button :hover{
  cursor: pointer;
}
.others {
  margin-bottom: 3.8rem;
  margin-left: 4.2rem;
  display: flex;
  font-weight: 700;
  flex-direction: column;
  gap: 5.2rem;

  span {
    color: #f05d23;
  }
  `;
