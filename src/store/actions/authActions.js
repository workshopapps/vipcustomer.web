import * as types from "../actiontypes/authTypes";

export const login_a = (dispatch, payload) => {
  dispatch({ type: types.ON_LOGIN_SUCCESSFUL, payload });
  localStorage.setItem("user", JSON.stringify(payload));
};

export const logout_a = (dispatch) => {
  dispatch({ type: types.ON_LOGOUT });
  localStorage.removeItem("user");
  localStorage.removeItem("api_key");
};

export const setApiKey_a = (dispatch, payload) => {
  if (payload === undefined)
    throw new Error("setApiKey action requires a payload");

  dispatch({ type: types.SET_API_KEY, payload });

  if (payload !== false) {
    localStorage.setItem("api_key", payload);
  } else {
    localStorage.removeItem("api_key");
  }
};
