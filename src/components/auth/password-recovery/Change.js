import React, { useState, useEffect } from "react";
import Shell from "./Shell";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import { Button, ErrorMessage, StyledInput, StyledDiv } from "./shell.styled";
import axios from "api/axios";
import { FaRegEyeSlash } from "react-icons/fa";

export default function Change() {
  // Import the email passed to this page using useNavigate?

  const [importedEmail, setImportedEmail] = React.useState("");
  const { state } = useLocation();

  useEffect(() => {
    const allp = state;
    setImportedEmail(allp);
  }, [1]);

  const [password, setPassword] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(true);
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [opacity, setOpacity] = React.useState(1);
  const [modalForm, setModalForm] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageIsShown, setErrorMessageIsShown] = useState(false);
  const [spinnerClasses, setSpinnerClasses] = useState("spinner small stop");

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setSpinnerClasses("spinner small stop");
  }
  function handlePasswordConfirm(e) {
    setPasswordConfirm(e.target.value);
    setSpinnerClasses("spinner small stop");
  }
  function togglePasswordVisibility() {
    setPasswordVisible((prevState) => !prevState);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setErrorMessage("password doesnt match");
      setErrorMessageIsShown(true);
    } else {
      if (password.length < 6) {
        setErrorMessage("password is less than 8 characters");
        setErrorMessageIsShown(true);
      } else {
        try {
          setSpinnerClasses("spinner small");
          console.log(state, password);
          const { data } = await axios.post("/api/user/reset_password", {
            email: importedEmail,
            password: password
          });
          console.log(data);
          setSpinnerClasses("spinner small stop");
          setModal(true);
          setOpacity(0.4);
          setModalForm("success");
        } catch (err) {
          setSpinnerClasses("spinner small stop");
          setModal(true);
          setOpacity(0.4);
          setModalForm("failure");
          const message = err?.response?.data?.detail;

          console.log(message);
        }
      }
    }
  }

  return (
    <div>
      <Shell
        // onBtnClick={handleSubmit}
        opacity={opacity}
        title="Change password">
        <form onSubmit={handleSubmit}>
          <StyledDiv>
            <StyledInput
              label="Enter new password"
              id="password"
              // type="password
              type={passwordVisible ? "text" : "password"}
              placeholder="Minimum of 6 characters"
              onChange={handlePasswordChange}
              value={password}
            />{" "}
            <FaRegEyeSlash onClick={togglePasswordVisibility} />
          </StyledDiv>

          <StyledDiv style={{ marginTop: "3.2rem" }}>
            <StyledInput
              label="Confirm the new password"
              id="new-password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Ensure it is the same"
              onChange={handlePasswordConfirm}
              value={passwordConfirm}
            />

            <FaRegEyeSlash onClick={togglePasswordVisibility} />
          </StyledDiv>
          {errorMessageIsShown && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Button>
            Ready to go
            <span
              className={spinnerClasses}
              style={{
                borderLeft: "2px solid white",
                display: "inline-block",
                marginLeft: "1rem"
              }}></span>
          </Button>
        </form>
      </Shell>{" "}
      {modal && (
        <Modal
          setModal={setModal}
          modalForm={modalForm}
          setOpacity={setOpacity}
        />
      )}
    </div>
  );
}
