import * as actionTypes from "../actions/actionTypes";

const initialState = {
  trends: []
};

const setTrend = (state, action) => {
  const { data } = action;
  return {
    ...state,
    trends: data
  };
};

const trend = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TREND:
      return setTrend(state, action);
    default:
      return state;
  }
};

export default trend;
