import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import reducer from "../reducers/AuthReducer";
import axios from "../../api/axios";
import { setApiKey_a } from "store/actions/authActions";

const Context = createContext();
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || false,
  api_key: localStorage.getItem("api_key") || false
};

const Authcontext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // get apiKey only if it doesnt exist and user is logged in
  useEffect(() => {
    if (!localStorage.getItem("user")) return;
    if (localStorage.getItem("user") && localStorage.getItem("api_key")) return;
    console.log("I ran... no api key");

    async function get_api_keys() {
      try {
        const resp = await axios.get("/api/user/get_api_keys");
        setApiKey_a(dispatch, resp.data.api_key);
      } catch (error) {
        setApiKey_a(dispatch, false);
      }
    }

    get_api_keys();
  }, [state.user]); //on user login/out

  return (
    <Context.Provider value={{ ...state, dispatch }}>
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
