import * as Types from "../constants/PaymentTypes";
import axios from "../../utils/axios";
import alertAction from "./alertAction";

export const getAllPayments = () => (dispatch) => {
  axios
    .get("/payment/allpayment")
    .then((response) => {
      dispatch({
        type: Types.GET_ALLPAYMENT,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_ALLPAYMENT_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};
