import * as Types from "../constants/QuarterAnnounceTypes";

const init = {
  data: {},
  error: null,
};

const quarterAnnounce = (state = init, action) => {
  switch (action.type) {
    case Types.QUARTERLYANNOUCE: {
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    }
    case Types.QUARTERLYANNOUCE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.UPDATE_QUARTERLYANNOUCE: {
        return {
          ...state,
          data: action.payload,
          error: null,
        };
      }
      case Types.UPDATE_QUARTERLYANNOUCE_ERROR: {
        return {
          ...state,
          error: action.payload,
        };
      }

    case Types.GET_QUARTERLYANNOUCE: {
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    }
    case Types.GET_QUARTERLYANNOUCE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default quarterAnnounce;
