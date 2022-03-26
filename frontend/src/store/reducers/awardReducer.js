import * as Types from "../constants/AwardTypes";

const init = {
  award: [],
  error: null,
};

const awardReudcer = (state = init, action) => {
  switch (action.type) {
    case Types.GIVE_AWARDS: {
      return {
        ...state,
        award: action.payload,
        error: null,
      };
    }
    case Types.GIVE_AWARDS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.GET_AWARD: {
      return {
        ...state,
        award: action.payload,
        error: null,
      };
    }
    case Types.GET_AWARD_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.GET_ALL_AWARD: {
      return {
        ...state,
        award: action.payload,
        error: null,
      };
    }
    case Types.GET_ALL_AWARD_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default awardReudcer;
