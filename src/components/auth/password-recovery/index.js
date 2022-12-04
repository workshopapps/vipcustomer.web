import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import Shell from "./Shell";
import { Button, ErrorMessage } from "./shell.styled";
import axios from "api/axios";
const index = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageIsShown, setErrorMessageIsShown] = useState(false);
  const [spinnerClasses, setSpinnerClasses] = useState("spinner small stop");

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(enteredEmail, typeof enteredEmail);
    if (!enteredEmail) setIsError(true);
    try {
      setSpinnerClasses("spinner small");

      const { data } = await axios.post("/api/user/verify_email", {
        email: enteredEmail
      });
      // const message = data?.response?.data?.detail;
      console.log(data.data);
      setSpinnerClasses("spinner small stop");

      console.log(data);
      if (data) {
        navigate("change", { state: data.data });
      }

      // try {
      //   setSpinnerClasses("spinner small");
      //   const { data } = await axios.post("/api/user/login", {
      //     email: email,
      //     password: password
      //   });
      //   setSpinnerClasses("spinner small stop");
      //   login_a(dispatch, data);
      //   nav(nextPath, { replace: true });
      // }
    } catch (err) {
      console.log(err, "erorrrrrr");
      const message = err?.response?.data?.detail;
      setErrorMessage(
        message || "An unexpected error occured. Please try again another time"
      );
      setErrorMessageIsShown(true);
      setEnteredEmail("");
      setSpinnerClasses("spinner small stop");
    }
  }
  function handleEmailInput(e) {
    setEnteredEmail(e.target.value);
    setErrorMessageIsShown(false);
  }
  return (
    <Shell
      // style={{ opacity: 0.4 }}
      title="Password Recovery">
      <h3>Forgot your password?</h3>
      <div className="text">
        You can easily request your password reset below, a password reset link
        would be sent to the registered email address, kindly ensure it is
        correct.
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          id="email"
          type="email"
          required
          placeholder="JohnDoe@gmail.com"
          value={enteredEmail}
          onChange={handleEmailInput}
          isError={isError}
        />
        {errorMessageIsShown && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button>
          Next
          <span
            className={spinnerClasses}
            style={{
              borderLeft: "2px solid white",
              display: "inline-block",
              marginLeft: "1rem"
            }}></span>
        </Button>
      </form>
    </Shell>
  );
};

export default index;
