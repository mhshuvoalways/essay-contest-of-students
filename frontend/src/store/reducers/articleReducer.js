import * as Types from "../constants/ArticleTypes";

const init = {
  articles: [],
  indivudualArticles: null,
  error: null,
  modal: false,
  enableBtn: true,
};

const articleReudcer = (state = init, action) => {
  switch (action.type) {
    case Types.POST_ARTICLE: {
      const temp = [...state.articles, action.payload];
      return {
        ...state,
        articles: temp,
        error: null,
        enableBtn: true,
      };
    }
    case Types.POST_ARTICLE_ERROR: {
      return {
        ...state,
        error: action.payload,
        enableBtn: true,
      };
    }

    case Types.UPDATE_ARTICLE: {
      const temp = [...state.articles];
      const findIndex = temp.findIndex((el) => el._id === action.payload._id);
      temp[findIndex] = action.payload;
      return {
        ...state,
        articles: temp,
        error: null,
        enableBtn: true
      };
    }
    case Types.UPDATE_ARTICLE_ERROR: {
      return {
        ...state,
        error: action.payload,
        enableBtn: true
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

    case Types.GET_ARTICLES: {
      return {
        ...state,
        articles: action.payload,
        error: null,
      };
    }
    case Types.GET_ARTICLES_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.GET_INDIVIDUAL_ARTICLES: {
      return {
        ...state,
        indivudualArticles: action.payload,
        error: null,
      };
    }
    case Types.GET_INDIVIDUAL_ARTICLES_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.DELETE_ARTICLES: {
      const temp = [...state.articles];
      const articles = temp.filter((el) => el._id !== action.payload._id);
      return {
        ...state,
        articles: articles,
        error: null,
      };
    }
    case Types.DELETE_ARTICLES_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.MODAL_TOGGLE: {
      return {
        ...state,
        modal: !state.modal,
      };
    }

    case Types.ENABLE_BTN: {
      return {
        ...state,
        enableBtn: false,
      };
    }

    default:
      return state;
  }
};

export default articleReudcer;
