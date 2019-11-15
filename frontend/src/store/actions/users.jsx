import * as actionTypes from "./actionTypes";
import axios from "axios";

export const saveToken = token => ({
  type: actionTypes.SAVE_TOKEN,
  token
});

export const logout = () => ({
  type: actionTypes.LOGOUT
});

export const FacebookLogin = access_token => {
  return dispatch => {
    axios
      .post("http://127.0.0.1:8000/users/login/facebook/", {
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
export const Login = (username, password) => {
  return dispatch =>
    axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        password: password
      })
      .then(response => {
        const { data } = response;
        if (data.token) {
          dispatch(saveToken(data.token));
        }
      });
};

export const Registration = (username, password, email, fullname) => {
  // console.log(username, password, email);
  return dispatch =>
    axios
      .post("http://127.0.0.1:8000/rest-auth/registration/", {
        username,
        password1: password,
        password2: password,
        email: email
        // fullname: fullname
      })
      .then(response => {
        console.log(response);
        // const { data } = response;
        // if (data.token) {
        //   dispatch(saveToken(data.token));
        // }
      });
};
