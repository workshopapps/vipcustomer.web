import { GoogleLogin } from "@react-oauth/google";
import React, { useEffect, useRef, useState } from "react";
import { login_a } from "../../store/actions/authActions";
import { AuthStore } from "../../store/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useScreenSize from "hooks/useScreenSize";

export default function GoogleAuth({ text }) {
  const { dispatch, _axios } = AuthStore();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageIsShown, setErrorMessageIsShown] = useState(false);
  const { screenWidth } = useScreenSize();

  const [spinnerClasses, setSpinnerClasses] = useState("spinner small stop");
  const googleAuthRef = useRef(null);
  const [googleAuthWidth, setGoogleAuthWidth] = useState(400);

  useEffect(() => {
    setGoogleAuthWidth(googleAuthRef.current.offsetWidth);
  }, [screenWidth]);

  async function onSuccess({ credential }) {
    try {
      setSpinnerClasses("spinner small");
      const { data } = await _axios.post("/api/user/google-auth/", {
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
      <div
        ref={googleAuthRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <GoogleLogin
          text={text}
          onError={onError}
          onSuccess={onSuccess}
          logo_alignment="center"
          width={googleAuthWidth}
        />
      </div>
    </>
  );
}

GoogleAuth.propTypes = {
  text: PropTypes.string.isRequired
};
