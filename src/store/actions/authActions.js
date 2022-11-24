import * as types from "../actiontypes/authTypes";

export const login_a = (dispatch, payload) => {
  dispatch({ type: types.ON_LOGIN_SUCCESSFUL, payload });
  localStorage.setItem("user", payload);
};

export const logout_a = (dispatch) => {
  dispatch({ type: types.ON_LOGOUT });
  localStorage.removeItem("user");
};
