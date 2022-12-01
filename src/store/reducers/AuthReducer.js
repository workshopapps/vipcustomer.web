import * as types from "../actiontypes/authTypes";

function AuthReducer(state, action) {
  if (action.type === types.ON_LOGIN_SUCCESSFUL) {
    return {
      ...state,
      user: action.payload
    };
  }
  if (action.type === types.ON_LOGOUT) {
    return {
      ...state,
      user: false
    };
  }

  return state;
}

export default AuthReducer;
