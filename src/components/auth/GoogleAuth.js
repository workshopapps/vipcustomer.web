import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import axios from "api/axios";
import { login_a } from "../../store/actions/authActions";
import { AuthStore } from "../../store/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function GoogleAuth({ text }) {
  const { dispatch } = AuthStore();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageIsShown, setErrorMessageIsShown] = useState(false);

  async function onSuccess({ credential }) {
    try {
      const { data } = await axios.post("/api/user/google-auth/", {
        jwt_token: credential
      });
      login_a(dispatch, data.user);
      navigate("/dashboard", { replace: true });
    } catch (e) {
      setErrorMessage(
        "An unexpected error occured. Please try again another time"
      );
      setErrorMessageIsShown(true);
    }
  }

  function onError() {
    setErrorMessage(
      "An unexpected error occured. Please try again another time"
    );
    setErrorMessageIsShown(true);
  }

  return (
    <>
      {errorMessageIsShown && (
        <div
          style={{
            marginBottom: "0.5rem",
            color: "#ff414e",
            fontSize: "1.4rem"
          }}>
          {errorMessage}
        </div>
      )}
      <GoogleLogin text={text} onError={onError} onSuccess={onSuccess} />
    </>
  );
}

GoogleAuth.propTypes = {
  text: PropTypes.string.isRequired
};
