import * as actionTypes from "../actions/actionTypes";

const initialState = {
  trends: [],
  totalCount: 0,
  categoryList: []
};

const setTrend = (state, action) => {
  const { data, count } = action;
  return {
    ...state,
    trends: data,
    totalCount: count
  };
};

const setCategory = (state, action) => {
  const { category } = action;
  return {
    ...state,
    categoryList: category
  };
};

const trend = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TREND:
      return setTrend(state, action);
    case actionTypes.SET_CATEGORY_LIST:
      return setCategory(state, action);
    default:
      return state;
  }
};

export default trend;
