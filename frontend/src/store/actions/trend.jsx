import * as actionTypes from "./actionTypes";
import axios from "axios";
// import { logout } from "./users";

const trend = axios.create({
  baseURL: "http://127.0.0.1:8000/"
  // baseURL:
  //   "http://ec2-54-180-109-107.ap-northeast-2.compute.amazonaws.com:8000/"
});

export const setTrend = (data, count) => ({
  type: actionTypes.SET_TREND,
  data,
  count
});

export const setCategory = category => ({
  type: actionTypes.SET_CATEGORY_LIST,
  category
});

export const getTrend = current => {
  return dispatch => {
    trend
      .get(`video/?page=${current}`)
      .then(response => {
        const { data } = response;
        dispatch(setTrend(data.results, data.count));
      })
      .catch(error => {
        console.log(error);
        // if (error.response) {
        //   const { status } = error.response;

        //   switch (status) {
        //     case 401:
        //       dispatch(logout());
        //       break;
        //     default:
        //       break;
        //   }
        // }
      });
  };
};

export const getCategory = () => {
  return dispatch => {
    trend
      .get("category/")
      .then(response => {
        const { data } = response;
        dispatch(setCategory(data.results));
      })
      .catch(error => {
        console.log(error);
        // if (error.response) {
        //   const { status } = error.response;

        //   switch (status) {
        //     case 401:
        //       dispatch(logout());
        //       break;
        //     default:
        //       break;
        //   }
        // }
      });
  };
};

export const getFilterTrends = categoryId => {
  return dispatch => {
    trend
      .get(`video/${categoryId}/search/`)
      .then(response => {
        const { data } = response;
        dispatch(setTrend(data));
      })
      .catch(error => {
        console.log(error);
        // if (error.response) {
        //   const { status } = error.response;

        //   switch (status) {
        //     case 401:
        //       dispatch(logout());
        //       break;
        //     default:
        //       break;
        //   }
        // }
      });
  };
};
