import * as actionTypes from "./actionTypes";
import axios from "axios";

const users = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

const usersToken = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

usersToken.interceptors.request.use(config => {
  const reqConfig = config;
  const token = localStorage.getItem("token");
  reqConfig.headers.Authorization = token ? `Token ${token}` : "";
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

export const followUser = userId => {
  return dispatch => {
    usersToken
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
    usersToken
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
    users
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
    users
      .post("rest-auth/login/", {
        username: username,
        password: password
      })
      .then(response => {
        const { data } = response;
        console.log(data);

        const username = data.user.username;

        if (data.key) {
          dispatch(saveToken(data.key, username));
          window.location.href = "/";
        }
      });
};

export const registration = (username, password, email, fullname) => {
  return dispatch =>
    users
      .post("rest-auth/registration/", {
        username,
        password1: password,
        password2: password,
        email: email
        // fullname: fullname
      })
      .then(response => {
        const { data } = response;
        const username = data.user.username;
        // if (data.token) {
        //   dispatch(saveToken(data.token, username));
        // }
        if (data.key) {
          dispatch(saveToken(data.key, username));
          window.location.href = "/";
        }
      });
};
