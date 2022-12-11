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

const Context = createContext();
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || false,
  api_key: localStorage.getItem("api_key") || false
};

const Authcontext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [headers, setHeaders] = useState(false);

  let refreshToken;
  let accessTokenHasBeenRefreshed = false;

  useEffect(() => {
    refreshToken = state.user?.refresh_token;

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
  }, [state.api_key, state.user]);

  console.log(headers);

  const _axios = axios.create({
    baseURL: "https://api.starfinder.hng.tech",
    headers: headers
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

  _axios.interceptors.response.use(
    (response) => response,
    async function (error) {
      if (
        error?.response?.status === 403 &&
        refreshToken &&
        !accessTokenHasBeenRefreshed
      ) {
        const previousRequest = error?.config;
        const { data } = await _axios.post(
          "/api/user/refresh_token",
          {},
          {
            headers: { Authorization: "Bearer " + refreshToken }
          }
        );
        const newAccessToken = data.access_token;
        const user = state.user;
        user["access_token"] = newAccessToken;
        login_a(dispatch, user);
        localStorage.setItem("user", JSON.stringify(user));
        previousRequest.headers["Authorization"] = "Bearer " + newAccessToken;
        accessTokenHasBeenRefreshed = true;
        return _axios(previousRequest);
      }

      accessTokenHasBeenRefreshed = false;
      return Promise.reject(error);
    }
  );

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
