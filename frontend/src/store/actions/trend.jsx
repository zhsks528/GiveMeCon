import * as actionTypes from "./actionTypes";
import axios from "axios";
import { logout } from "./users";

const trend = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

const server = axios.create({
  baseURL:
    "http://ec2-15-164-162-133.ap-northeast-2.compute.amazonaws.com:8000/"
});

trend.interceptors.request.use(config => {
  const reqConfig = config;
  const token = localStorage.getItem("jwt");
  reqConfig.headers.Authorization = token ? `JWT ${token}` : "";
  return config;
});

server.interceptors.request.use(config => {
  const reqConfig = config;
  const token = localStorage.getItem("jwt");
  reqConfig.headers.Authorization = token ? `JWT ${token}` : "";
  return config;
});

export const setTrend = data => ({
  type: actionTypes.SET_TREND,
  data
});

export const getTrend = () => {
  return dispatch => {
    trend
      .get("video/")
      .then(response => {
        console.log(response);
        const { data } = response;
        dispatch(setTrend(data.results));
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
              break;
            default:
              break;
          }
        }
      });
  };
};