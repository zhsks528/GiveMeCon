import * as actionTypes from "./actionTypes";
import axios from "axios";

const userSever = axios.create({
  baseURL: "http://127.0.0.1:8000/"
  // baseURL:
  //   "http://ec2-54-180-109-107.ap-northeast-2.compute.amazonaws.com:8000/"
});

userSever.interceptors.request.use(config => {
  const reqConfig = config;
  const token = localStorage.getItem("token");
  reqConfig.headers.Authorization = token ? `JWT ${token}` : "";
  return config;
});

export const saveToken = (token, username) => ({
  type: actionTypes.SAVE_TOKEN,
  token,
  username
});

export const logout = () => ({
  type: actionTypes.LOGOUT
});

export const setFollowUser = userId => ({
  type: actionTypes.FOLLOW_USER,
  userId
});

export const setUnfollowUser = userId => ({
  type: actionTypes.UNFOLLOW_USER,
  userId
});

export const setProfile = profileData => ({
  type: actionTypes.SET_PROFILE,
  profileData
});

export const searchUserProfile = searchProfileData => ({
  type: actionTypes.SEARCH_USER_PROFILE,
  searchProfileData
});

export const followUser = userId => {
  return dispatch => {
    userSever
      .post(`users/${userId}/follow/`)
      .then(response => {
        const { status } = response;
        if (status === 200) {
          dispatch(setFollowUser(userId));
        }
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
              break;
            default:
              dispatch(setUnfollowUser(userId));
              break;
          }
        }
        dispatch(setUnfollowUser(userId));
      });
  };
};

export const unfollowUser = userId => {
  return dispatch => {
    userSever
      .post(`users/${userId}/unfollow/`)
      .then(response => {
        const { status } = response;
        if (status === 200) {
          dispatch(setUnfollowUser(userId));
        }
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
              break;
            default:
              dispatch(setFollowUser(userId));
              break;
          }
        }
        dispatch(setFollowUser(userId));
      });
  };
};

export const FacebookLogin = access_token => {
  return dispatch => {
    userSever
      .post("users/login/facebook/", {
        access_token: access_token
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };
};

/**
 * 로그인
 * @param {string} username
 * @param {string} password
 */
export const login = (username, password) => {
  return dispatch =>
    userSever
      .post("rest-auth/login/", {
        username: username,
        password: password
      })
      .then(response => {
        
        const { data } = response;
        
        const username = data.user.username;

        if (data.token) {
          dispatch(saveToken(data.token, username));
          window.location.href = "/";
        }
      });
};

export const registration = (username, password, email) => {
  return dispatch =>
    userSever
      .post("rest-auth/registration/", {
        username,
        password1: password,
        password2: password,
        email: email
      })
      .then(response => {
        const { data } = response;
        const username = data.user.username;

        if (data.token) {
          dispatch(saveToken(data.token, username));
          window.location.href = "/";
        }
      })
      .catch(error => console.log(error))
};

export const getProfile = username => {
  return dispatch =>
    userSever.get(`users/${username}/`).then(response => {
      const { data } = response;
      dispatch(setProfile(data));
    });
};

export const searchProfile = username => {
  return dispatch =>
    userSever.get(`users/${username}/`).then(response => {
      const { data } = response;
      dispatch(searchUserProfile(data));
    });
};
