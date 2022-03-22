import * as Types from "../constants/PaymentTypes";

const paymentReducer = (state = [], action) => {
  switch (action.type) {
    case Types.GET_ALLPAYMENT: {
      return action.payload;
    }
    case Types.GET_ALLPAYMENT_ERROR: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default paymentReducer;
