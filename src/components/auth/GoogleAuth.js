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

  const [spinnerClasses, setSpinnerClasses] = useState("spinner small stop");

  async function onSuccess({ credential }) {
    try {
      setSpinnerClasses("spinner small");
      const { data } = await axios.post("/api/user/google-auth/", {
        jwt_token: credential
      });

      setSpinnerClasses("spinner small stop");
      login_a(dispatch, data);
      navigate("/dashboard", { replace: true });
    } catch (e) {
      onError();
    }
  }

  function onError() {
    setSpinnerClasses("spinner small stop");
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
      <div className={spinnerClasses} style={{ marginBottom: "0.5rem" }}></div>
      <GoogleLogin
        text={text}
        onError={onError}
        onSuccess={onSuccess}
        logo_alignment="center"
      />
    </>
  );
}

GoogleAuth.propTypes = {
  text: PropTypes.string.isRequired
};
