import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
  userList: [],
  myProfile: [],
  userProfile: []
};

const saveToken = (state, action) => {
  const { token, username } = action;
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
  return {
    ...state,
    isLoggedIn: true,
    token: action.token
  };
};

const logout = (state, action) => {
  localStorage.removeItem("token");
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

const setProfile = (state, action) => {
  const { profileData } = action;

  return {
    ...state,
    myProfile: profileData
  };
};

const searchUserProfile = (state, action) => {
  const { searchProfileData } = action;
  return {
    ...state,
    userProfile: searchProfileData
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
    case actionTypes.SET_PROFILE:
      return setProfile(state, action);
    case actionTypes.SEARCH_USER_PROFILE:
      return searchUserProfile(state, action);

    default:
      return state;
  }
};

export default users;
