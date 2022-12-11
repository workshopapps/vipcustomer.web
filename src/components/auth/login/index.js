import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.css";
import { login_a } from "store/actions/authActions";
import { AuthStore } from "store/contexts/AuthContext";
import Input from "../Input";
// import Checkbox from "../signup/Checkbox";
import GoogleAuth from "../GoogleAuth";
import BackBtn from "../BackBtn";

const Login = () => {
  const { dispatch, _axios } = AuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  // const [isChecked, setIsChecked] = useState(true);
  const [errorMessageIsShown, setErrorMessageIsShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "an unexpected error occured, please try again another time"
  );
  const [spinnerClasses, setSpinnerClasses] = useState("spinner small stop");

  const location = useLocation();
  const nextPath = location.state?.from?.pathname || "/dashboard";
  const nav = useNavigate();

  async function loginHandler(e) {
    e.preventDefault();

    if (!email) {
      setIsEmail(false);
      setTimeout(() => {
        setIsEmail(true);
      }, 2500);
      return;
    }

    if (password.length < 6) {
      setIsPassword(false);
      setTimeout(() => {
        setIsPassword(true);
      }, 2500);
      return;
    }

    try {
      setSpinnerClasses("spinner small");
      const { data } = await _axios.post("/api/user/login", {
        email: email,
        password: password
      });
      setSpinnerClasses("spinner small stop");
      login_a(dispatch, data);
      nav(nextPath, { replace: true });
    } catch (err) {
      setSpinnerClasses("spinner small stop");
      const message = err?.response?.data?.detail;
      setErrorMessage(
        message || "An unexpected error occured. Please try again another time"
      );
      setErrorMessageIsShown(true);
    }
  }

  return (
    <div className={styles.login__container}>
      <BackBtn />
      <div className={styles.login__container__img}>
        <div>
          <h1>Let&apos;s help you, identify VIPs</h1>
          <p>
            We are closer than you can imagine, Star Finder VIP always at your
            service.
          </p>
        </div>
      </div>

      <div className={styles.login}>
        <h1>Login</h1>

        <p>Welcome, Kindly enter your details to login.</p>

        <form onSubmit={loginHandler}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="email"
            placeholder="JohnObi@gmail.com"
            errorMessage="Invalid Email"
            isError={!isEmail}
            required
          />

          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            label="Password"
            placeholder="********"
            errorMessage="Invalid Password"
            isError={!isPassword}
            type="password"
          />

          <div className={styles.spaceBetween}>
            <div></div>
            {/* <Checkbox
              value={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              id="checked">
              Remember me
            </Checkbox> */}
            <p onClick={() => nav("/password-recovery")}>Forgot password?</p>
          </div>

          <div style={{ marginTop: "1rem" }}>
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
            <button className={styles.login__btn}>
              Login
              <span
                className={spinnerClasses}
                style={{
                  borderLeft: "2px solid white",
                  display: "inline-block"
                }}></span>
            </button>
          </div>
        </form>

        <div className={styles.lines}>
          <span className={styles.line}></span>{" "}
          <span className={styles.txt}>OR</span>{" "}
          <span className={styles.line}></span>
        </div>

        <GoogleAuth text="continue_with" />

        <p style={{ marginTop: "2.4rem" }}>
          Don&apos;t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
