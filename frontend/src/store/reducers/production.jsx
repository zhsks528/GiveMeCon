import * as actionTypes from "../actions/actionTypes";

const initialState = {
  productions: []
};

const setProduction = (state, action) => {
  const { productions } = action;
  return {
    ...state,
    productions: productions
  };
};

const likeProduction = (state, action) => {
  const { productionId } = action;
  const updatedProductions = state.productions.map(production => {
    if (production.id === productionId) {
      return {
        ...production,
        is_liked: true,
        likes_count: production.likes_count + 1
      };
    }
    return production;
  });
  return { ...state, productions: updatedProductions };
};

const unLikeProduction = (state, action) => {
  const { productionId } = action;
  const updatedProductions = state.productions.map(production => {
    if (production.id === productionId) {
      return {
        ...production,
        is_liked: false,
        likes_count: production.likes_count - 1
      };
    }
    return production;
  });
  return { ...state, productions: updatedProductions };
};

const addComment = (state, action) => {
  const { productionId, message } = action;

  const updatedProductions = state.productions.map(production => {
    if (production.id === productionId) {
      return {
        ...production,
        comments: [...production.comments, message]
      };
    }
    return production;
  });
  return { ...state, productions: updatedProductions };
};

const production = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTION:
      return setProduction(state, action);
    case actionTypes.LIKE_PRODUCTION:
      return likeProduction(state, action);
    case actionTypes.UNLIKE_PRODUCTION:
      return unLikeProduction(state, action);
    case actionTypes.ADD_COMMENT:
      return addComment(state, action);

    default:
      return state;
  }
};

export default production;
