import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false
};

const saveToken = (state, action) => {
  localStorage.setItem("jwt", action.token);
  return {
    ...state,
    isLoggedIn: true,
    token: action.token
  };
};

const logout = (state, action) => {
  localStorage.removeItem("jwt");
  return {
    ...state,
    isLoggedIn: false
  };
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_TOKEN:
      return saveToken(state, action);
    case actionTypes.LOGOUT:
      return logout(state, action);
    default:
      return state;
  }
};

export default users;
