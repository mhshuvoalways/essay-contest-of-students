import * as Types from "../constants/IsPaySubmitTypes";

const init = {
  ispaysubmitObj: {},
  error: null,
};

const isPaySubmitReducer = (state = init, action) => {
  switch (action.type) {
    case Types.IS_PAY_SUBMIT: {
      return {
        ...state,
        ispaysubmitObj: action.payload,
        error: null,
      };
    }
    case Types.IS_PAY_SUBMIT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default isPaySubmitReducer;
