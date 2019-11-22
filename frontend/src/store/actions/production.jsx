import * as actionTypes from "./actionTypes";
import axios from "axios";
import { logout } from "./users";

// const produce = axios.create({
//   baseURL:
//     "http://ec2-54-180-109-107.ap-northeast-2.compute.amazonaws.com:8000/"
// });

const produceServer = axios.create({
  baseURL:
    "http://ec2-54-180-109-107.ap-northeast-2.compute.amazonaws.com:8000/"
});

produceServer.interceptors.request.use(config => {
  const reqConfig = config;
  const token = localStorage.getItem("token");
  reqConfig.headers.Authorization = token ? `Token ${token}` : "";
  return config;
});

export const setProduction = productions => {
  return {
    type: actionTypes.SET_PRODUCTION,
    productions
  };
};

export const setDetailProduction = detailData => {
  return {
    type: actionTypes.SET_DETAIL_PRODUCTION,
    detailData
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

export const deleteComment = commentId => {
  return {
    type: actionTypes.DELETE_COMMENT,
    commentId
  };
};

export const setUserList = userList => {
  return {
    type: actionTypes.SET_USER_LIST,
    userList
  };
};

//
export const getProduction = () => {
  return dispatch => {
    produceServer
      .get("production/")
      .then(response => {
        console.log(response);
        const { data } = response;
        dispatch(setProduction(data));
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

//
export const getDetailProduction = productionId => {
  return dispatch => {
    produceServer
      .get(`production/${productionId}/`)
      .then(response => {
        const { data } = response;
        dispatch(setDetailProduction(data));
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

export const likeProduction = productionId => {
  return dispatch => {
    produceServer
      .post(`production/${productionId}/likes/`)
      .then(response => {
        dispatch(doLikeProduction(productionId));
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

export const unlikeProduction = productionId => {
  return dispatch => {
    produceServer
      .delete(`production/${productionId}/unlikes/`)
      .then(response => {
        dispatch(doUnLikeProduction(productionId));
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

export const commentProduction = (productionId, message) => {
  return dispatch => {
    produceServer
      .post(`production/${productionId}/comments/`, { message })
      .then(response => {
        const { data } = response;
        dispatch(addComment(productionId, data));
      })
      .catch(error => {
        console.log(error);
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

export const commentDelete = commentId => {
  return dispatch => {
    produceServer
      .delete(`production/comments/${commentId}/`)
      .then(response => {
        const { status } = response;

        if (status === 204) {
          dispatch(deleteComment(commentId));
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
              break;
          }
        }
      });
  };
};

//
export const getProductionLikes = productionId => {
  return dispatch => {
    produceServer
      .get(`production/${productionId}/likes/`)
      .then(response => {
        const { data } = response;
        dispatch(setUserList(data));
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

export const produceWrite = form => {
  return dispatch => {
    produceServer.post("production/", form).then(response => {
      const { status } = response;
      if (status === 201) {
        window.location.href = "/production";
      }
      console.log(response);
    });
  };
};
