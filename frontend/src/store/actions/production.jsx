import * as actionTypes from "./actionTypes";
import axios from "axios";
import { logout } from "./users";

const produce = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

produce.interceptors.request.use(config => {
  const reqConfig = config;
  const token = localStorage.getItem("jwt");
  reqConfig.headers.Authorization = token ? `JWT ${token}` : "";
  return config;
});

export const setProduction = productions => {
  return {
    type: actionTypes.SET_PRODUCTION,
    productions
  };
};

export const doLikeProduction = productionId => {
  return {
    type: actionTypes.LIKE_PRODUCTION,
    productionId
  };
};

export const doUnLikeProduction = productionId => {
  return {
    type: actionTypes.UNLIKE_PRODUCTION,
    productionId
  };
};

export const addComment = (productionId, message) => {
  return {
    type: actionTypes.ADD_COMMENT,
    productionId,
    message
  };
};
export const getProduction = () => {
  return dispatch => {
    produce
      .get("production/")
      .then(response => {
        const { data } = response;
        dispatch(setProduction(data));
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
          }
        }
      });
  };
};

export const likeProduction = productionId => {
  return dispatch => {
    // dispatch(doLikeProduction(productionId));

    produce
      .post(`production/${productionId}/likes/`)
      .then(response => {
        dispatch(doLikeProduction(productionId));
        // console.log(response.ok);
        // if (!response.ok) {
        //   dispatch(doUnLikeProduction(productionId));
        // }
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
          }
        }
      });
  };
};

export const unlikeProduction = productionId => {
  return dispatch => {
    // dispatch(doUnLikeProduction(productionId));

    produce
      .delete(`production/${productionId}/unlikes/`)
      .then(response => {
        dispatch(doUnLikeProduction(productionId));
        // if (!response.ok) {
        //   dispatch(doLikeProduction(productionId));
        // }
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
          }
        }
      });
  };
};

export const commentProduction = (productionId, message) => {
  return dispatch => {
    produce
      .post(`production/${productionId}/comments/`, { message })
      .then(response => {
        const { data } = response;
        dispatch(addComment(productionId, data));
      })
      .catch(error => {
        if (error.response) {
          const { status } = error.response;

          switch (status) {
            case 401:
              dispatch(logout());
          }
        }
      });
  };
};
