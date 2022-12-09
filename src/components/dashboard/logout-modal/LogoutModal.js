import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LogoutModalBox,
  LogoutModalContent,
  LogoutModalOverlay
} from "./logoutModal.styled";
import { logout_a } from "store/actions/authActions";
import { AuthStore } from "store/contexts/AuthContext";

const LogoutModal = (props) => {
  const { closeModal } = props;

  const { dispatch } = AuthStore();

  const logoutHandler = (e) => {
    e.preventDefault();
    logout_a(dispatch);

    navigate("/");
  };

  const overlayHandler = () => {
    closeModal(false);
  };

  const navigate = useNavigate();

  return (
    <LogoutModalOverlay onClick={overlayHandler}>
      <LogoutModalBox
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <LogoutModalContent>
          <h4>Are you sure you want to log out?</h4>
          <button className="button logout" onClick={logoutHandler}>
            Log Out
          </button>
          <button className="button cancel" onClick={() => closeModal(false)}>
            Cancel
          </button>
        </LogoutModalContent>
      </LogoutModalBox>
    </LogoutModalOverlay>
  );
};

LogoutModal.propTypes = {
  closeModal: PropTypes.bool
  // setSideBarOpen: PropTypes.func
};
export default LogoutModal;
