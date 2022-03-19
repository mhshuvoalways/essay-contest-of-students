import * as Types from "../constants/QuarterAnnounceTypes";
import axios from "../../utils/axios";
import alertAction from "./alertAction";

export const addquarterAnnounce = (quarterannounce) => (dispatch) => {
  axios
    .post("/quarterannounce/add", quarterannounce)
    .then((response) => {
      dispatch({
        type: Types.QUARTERLYANNOUCE,
        payload: response.data.response,
      });
      dispatch(alertAction(response.data.message));
    })
    .catch((err) => {
      dispatch({
        type: Types.QUARTERLYANNOUCE_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.year));
      dispatch(alertAction(err.response.data.quarterly));
      dispatch(alertAction(err.response.data.message));
    });
};

export const updateAnnounce = () => (dispatch) => {
  axios
    .get("/quarterannounce/update")
    .then((response) => {
      dispatch({
        type: Types.UPDATE_QUARTERLYANNOUCE,
        payload: response.data.response,
      });
      dispatch(alertAction(response.data.message));
    })
    .catch((err) => {
      dispatch({
        type: Types.UPDATE_QUARTERLYANNOUCE_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const getQuarterAnnounce = () => (dispatch) => {
  axios
    .get("/quarterannounce/get")
    .then((response) => {
      dispatch({
        type: Types.GET_QUARTERLYANNOUCE,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_QUARTERLYANNOUCE_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};
