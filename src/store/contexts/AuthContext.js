import React, { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "../reducers/AuthReducer";
import { login_a } from "store/actions/authActions";

const Context = createContext();
const initialState = { user: false };

const Authcontext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) login_a(dispatch, JSON.parse(user));
  }, []);

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
