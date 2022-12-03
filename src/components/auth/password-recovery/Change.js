import React from "react";
import Shell from "./Shell";
import Input from "../Input";
import { useNavigate } from "react-router-dom";
// import { AiOutlineEyeInvisible } from "react-icons/ai";
import Modal from "./Modal";

export default function Change() {
  const navigate = useNavigate();
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [opacity, setOpacity] = React.useState(1);
  const [modalForm, setModalForm] = React.useState("");
  const [modal, setModal] = React.useState(false);

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handlePasswordConfirm(e) {
    setPasswordConfirm(e.target.value);
  }

  function handleSubmit() {
    console.log("gbagboa");
    setModal(true);
    setOpacity(0.4);
    if (password !== passwordConfirm) {
      setModalForm("failure");
    } else {
      setModalForm("success");
    }
    if (password.length < 8) {
      setModalForm("failure");
    }
  }

  return (
    <div>
      <Shell
        onBtnClick={handleSubmit}
        opacity={opacity}
        title="Change password"
        buttonText="Ready to go">
        <Input
          label="Enter new password"
          id="password"
          // type="password
          type="text"
          placeholder="Minimum of 8 characters"
          onChange={handlePasswordChange}
          value={password}
        />
        <div style={{ marginTop: "3.2rem" }}>
          <Input
            label="Confirm the new password"
            id="new-password"
            // type="password"
            placeholder="Ensure it is the same"
            errorMessage="Enter a valid email address"
            onChange={handlePasswordConfirm}
            value={passwordConfirm}
          />
        </div>
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
