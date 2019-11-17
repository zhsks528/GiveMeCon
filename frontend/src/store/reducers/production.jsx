import * as actionTypes from "../actions/actionTypes";

const initialState = {
  productions: [],
  detailData: {}
};

const setProduction = (state, action) => {
  const { productions } = action;
  return {
    ...state,
    productions: productions
  };
};

const setDetailProduction = (state, action) => {
  const { detailData } = action;
  return {
    ...state,
    detailData: detailData
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
  const { message } = action;
  const { detailData } = state;

  return {
    ...state,
    detailData: {
      ...detailData,
      comments: [...detailData.comments, message],
      comments_count: detailData.comments_count + 1
    }
  };
};

const deleteComment = (state, action) => {
  const { detailData } = state;
  const { commentId } = action;

  let deleteId = detailData.comments.filter(function(comment) {
    return comment.id === commentId;
  });

  const deleteIndex = detailData.comments.indexOf(deleteId[0]);

  let rest = null;

  if (deleteIndex === 0) {
    rest = [...detailData.comments.slice(1)];
  } else if (deleteIndex > 0) {
    rest = [
      ...detailData.comments.slice(0, deleteIndex),
      ...detailData.comments.slice(deleteIndex + 1)
    ];
  }

  return {
    ...state,
    detailData: {
      ...detailData,
      comments: rest,
      comments_count: detailData.comments_count - 1
    }
  };
};

const production = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTION:
      return setProduction(state, action);
    case actionTypes.SET_DETAIL_PRODUCTION:
      return setDetailProduction(state, action);
    case actionTypes.LIKE_PRODUCTION:
      return likeProduction(state, action);
    case actionTypes.UNLIKE_PRODUCTION:
      return unLikeProduction(state, action);
    case actionTypes.ADD_COMMENT:
      return addComment(state, action);
    case actionTypes.DELETE_COMMENT:
      return deleteComment(state, action);
    default:
      return state;
  }
};

export default production;
