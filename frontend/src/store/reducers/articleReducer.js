import * as Types from "../constants/ArticleTypes";

const init = {
  articles: [],
  error: null,
};

const articleReudcer = (state = init, action) => {
  switch (action.type) {
    case Types.POST_ARTICLE: {
      const temp = [...state.articles, action.payload];
      return {
        ...state,
        articles: temp,
        error: null,
      };
    }
    case Types.POST_ARTICLE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.GET_MY_ARTICLE: {
      return {
        ...state,
        articles: action.payload,
        error: null,
      };
    }
    case Types.GET_MYARTICLE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default articleReudcer;
