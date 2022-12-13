import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState
} from "react";
import PropTypes from "prop-types";
import reducer from "../reducers/AuthReducer";
import { login_a, setApiKey_a } from "store/actions/authActions";
import axios from "axios";

const TWENTYFIVE_MINUTES_IN_MILLISECONDS = 25 * 60 * 1000;

const Context = createContext();
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || false,
  api_key: localStorage.getItem("api_key") || false
};

const Authcontext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [headers, setHeaders] = useState(false);

  useEffect(() => {
    if (state.api_key) {
      setHeaders({
        Authorization: "Bearer " + state.user?.access_token,
        "X-API-KEY": state.api_key
      });
    } else {
      setHeaders({
        Authorization: "Bearer " + state.user?.access_token
      });
    }
    console.log("headers updating??");
  }, [state.api_key, state.user]);

  const _axios = axios.create({
    baseURL: "https://api.starfinder.hng.tech",
    headers: headers
    // timeout: 500000 //temporal
  });

  // get apiKey only if it doesnt exist and user is logged in
  useEffect(() => {
    if (!state.user) return;
    if (state.user && state.api_key) return;
    if (!headers) return;

    console.log("I ran... no api key");
    async function get_api_keys() {
      try {
        const resp = await _axios.get("/api/user/get_api_keys");
        setApiKey_a(dispatch, resp.data.api_key);
      } catch (error) {
        setApiKey_a(dispatch, false);
      }
    }

    get_api_keys();
  }, [headers, state.user, state.api_key]); //on user login/out

  useEffect(() => {
    if (!state.user) return;

    const lastTimeStamp = localStorage.getItem("access_token_timestamp");
    const currentTime = new Date().getTime();
    const timeSinceLastRefresh = currentTime - lastTimeStamp;
    const accessTokenHasExpired =
      timeSinceLastRefresh > TWENTYFIVE_MINUTES_IN_MILLISECONDS;

    async function getNewAccessToken() {
      const refreshToken = state.user?.refresh_token;
      const { data } = await _axios.post(
        "/api/user/refresh_token",
        {},
        {
          headers: { Authorization: "Bearer " + refreshToken }
        }
      );

      const newAccessToken = data.access_token;
      const user = { ...state.user };
      user["access_token"] = newAccessToken;
      login_a(dispatch, user);
      console.log("access token refreshed");
    }

    function startTimer() {
      getNewAccessToken();
      setInterval(getNewAccessToken, TWENTYFIVE_MINUTES_IN_MILLISECONDS);
    }

    const remainingTime =
      TWENTYFIVE_MINUTES_IN_MILLISECONDS - timeSinceLastRefresh;

    if (accessTokenHasExpired) startTimer();
    else setTimeout(startTimer, remainingTime);
  }, []);

  return (
    <Context.Provider value={{ ...state, dispatch, _axios, headers }}>
      {children}
    </Context.Provider>
  );
};

export default Authcontext;
export const AuthStore = () => useContext(Context);

// declaring props
Authcontext.propTypes = {
  children: PropTypes.element.isRequired
};
