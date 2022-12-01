import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { ModalContent, ModalWrap } from "./modal.styled";

// appp
const Modal = ({ search = {}, result, name, modal, setModal }) => {
  // search from input field
  const { email, age, occupation, gender } = search;

  // result from API
  const {
    name: resName,
    gender: resGender,
    is_vip,
    vip_score,
    age: resAge
  } = result || {};

  // console.log(result);

  return (
    <ModalWrap modal={modal} className={` `}>
      <div style={{}} className="modal-body">
        <div className="header">
          <h2>Axe Api</h2>
          <button onClick={() => setModal(!modal)} className="modal-btn">
            <FaTimes />
          </button>
        </div>

        <ModalContent>
          <h2>Search Params</h2>
          <div className="search">
            <div className="row">
              <small></small>
              <span>Name</span>
              <p>{name}</p>
            </div>

            {email && (
              <div className="row">
                <small></small>
                <span>Email</span>
                <p>{email}</p>
              </div>
            )}

            {gender && (
              <div className="row">
                <small></small>
                <span>Gender</span>
                <p>{gender}</p>
              </div>
            )}

            {occupation && (
              <div className="row">
                <small></small>
                <span>Occupation</span>
                <p>{occupation}</p>
              </div>
            )}

            {age && (
              <div className="row">
                <small></small>
                <span>Age</span>
                <p>{age}</p>
              </div>
            )}
          </div>

          <h2>Results</h2>
          <div className="results">
            <div></div>

            {result ? (
              <div>
                <div className="row">
                  <small></small>
                  <span>Name</span>
                  <p className="capitalize">{resName}</p>
                </div>

                <div className="row">
                  <small></small>
                  <span>VIP</span>
                  {is_vip ? (
                    <div className="vip vip_green">
                      <h4>Hurray !!! VIP</h4>
                      <div>
                        <AiOutlineCheck />
                      </div>
                    </div>
                  ) : (
                    <div className="vip vip_red">
                      <p> Not a VIP</p>
                      <div>
                        <FaTimes />
                      </div>
                    </div>
                  )}
                </div>

                <div className="row">
                  <small></small>
                  <span>Score</span>
                  <p>{vip_score}%</p>
                </div>

                <div className="row">
                  <small></small>
                  <span>Gender</span>
                  <p>{resGender}</p>
                </div>

                <div className="row">
                  <small></small>
                  <span>Age</span>
                  <p>{resAge} years</p>
                </div>
              </div>
            ) : (
              <div className="not__found">
                <h4>Ooops</h4>
                <p>We searched everywhere but {"couldn't"} find your vip</p>
                <p>Please try again</p>
              </div>
            )}
          </div>
        </ModalContent>
      </div>
    </ModalWrap>
  );
};

Modal.propTypes = {
  result: PropTypes.object,
  search: PropTypes.object,
  name: PropTypes.string,
  modal: PropTypes.bool,
  setModal: PropTypes.func
};

export default Modal;
