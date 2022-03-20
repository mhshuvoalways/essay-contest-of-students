import * as Types from "../constants/IsPaySubmitTypes";
import axios from "../../utils/axios";
import alertAction from "./alertAction";

export const ispaysubmitGet = () => (dispatch) => {
  axios
    .get("/ispaysubmit/get")
    .then((response) => {
      dispatch({
        type: Types.IS_PAY_SUBMIT,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.IS_PAY_SUBMIT_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};
