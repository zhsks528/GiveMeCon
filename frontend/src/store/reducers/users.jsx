import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  userList: []
};

const saveToken = (state, action) => {
  const { token, username } = action;
  localStorage.setItem("jwt", token);
  localStorage.setItem("username", username);
  return {
    ...state,
    isLoggedIn: true,
    token: action.token
  };
};

const logout = (state, action) => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("username");
  return {
    ...state,
    isLoggedIn: false
  };
};

const setUserList = (state, action) => {
  const { userList } = action;
  return {
    ...state,
    userList: userList
  };
};

const followUser = (state, action) => {
  const { userId } = action;
  const { userList } = state;

  const updatedUserList = userList.map(user => {
    if (user.id === userId) {
      return { ...user, following: true };
    }
    return user;
  });

  return {
    ...state,
    userList: updatedUserList
  };
};

const unfollowUser = (state, action) => {
  const { userId } = action;
  const { userList } = state;

  const updatedUserList = userList.map(user => {
    if (user.id === userId) {
      return { ...user, following: false };
    }
    return user;
  });

  return {
    ...state,
    userList: updatedUserList
  };
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_TOKEN:
      return saveToken(state, action);
    case actionTypes.LOGOUT:
      return logout(state, action);
    case actionTypes.SET_USER_LIST:
      return setUserList(state, action);
    case actionTypes.FOLLOW_USER:
      return followUser(state, action);
    case actionTypes.UNFOLLOW_USER:
      return unfollowUser(state, action);
    default:
      return state;
  }
};

export default users;
