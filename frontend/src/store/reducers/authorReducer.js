import * as Types from "../constants/AuthorTypes";

const init = {
  author: [],
  error: null,
};

const authorReudcer = (state = init, action) => {
  switch (action.type) {
    case Types.GIVE_AUTHOR: {
      return {
        ...state,
        author: action.payload,
        error: null,
      };
    }
    case Types.GIVE_AUTHOR_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.GET_AUTHOR: {
      return {
        ...state,
        author: action.payload,
        error: null,
      };
    }
    case Types.GET_AUTHOR_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.GET_ALL_AUTHOR: {
      return {
        ...state,
        author: action.payload,
        error: null,
      };
    }
    case Types.GET_ALL_AUTHOR_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default authorReudcer;
