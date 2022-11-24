import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import styles from "./index.module.css";
import { login_a } from "store/actions/authActions";
import { AuthStore } from "store/contexts/AuthContext";
import axios from "api/axios";

const Login = () => {
  const { dispatch } = AuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const [errorMessageIsShown, setErrorMessageIsShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "an unexpected error occured, please try again another time"
  );
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

    if (password.length < 8) {
      setIsPassword(false);
      setTimeout(() => {
        setIsPassword(true);
      }, 2500);
      return;
    }

    try {
      const { data } = await axios.post("/api/user/login", {
        email: email,
        password: password
      });
      login_a(dispatch, data);
      nav(nextPath, { replace: true });
    } catch (err) {
      if (err?.response?.status === 401) {
        setErrorMessage("invalid credentials");
      }
      setErrorMessageIsShown(true);
    }
  }

  return (
    <div className={styles.login__container}>
      <div className={styles.login__container__img}>
        <div>
          <h1>Let&apos;s help you, identify VIPs</h1>
          <p>
            We are closer than you can imagine, AXE VIP always at your service.
          </p>
        </div>
      </div>

      <div className={styles.login}>
        <h1>Login</h1>

        <p>Welcome, Kindly enter your details to login.</p>

        <form onSubmit={loginHandler}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="email"
            placeholder="JohnObi@gmail.com"
            errorMessage="Invalid Email"
            isError={!isEmail}
            type="email"
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

          <Checkbox
            value={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            id="checked">
            Remember me
          </Checkbox>

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
            <button className={styles.login__btn}>Login</button>
          </div>
        </form>

        <div className={styles.lines}>
          <span className={styles.line}></span>{" "}
          <span className={styles.txt}>OR</span>{" "}
          <span className={styles.line}></span>
        </div>

        <button className={styles.google}>
          <FcGoogle />
          Authorize with Google
        </button>

        <p>
          Don&apos;t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
