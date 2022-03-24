import * as Types from "../constants/AwardTypes";
import axios from "../../utils/axios";
import alertAction from "./alertAction";
import enableBtn from "./enableBtnAction";

export const giveAward = (award) => (dispatch) => {
  axios
    .post("/award/add", award)
    .then((response) => {
      dispatch({
        type: Types.GIVE_AWARDS,
        payload: response.data.response,
      });
      dispatch(alertAction(response.data.message));
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.GIVE_AWARDS_ERROR,
        payload: err.response.data,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.message));
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.award));
    });
};

export const getAward = () => (dispatch) => {
  axios
    .get("/award/get")
    .then((response) => {
      dispatch({
        type: Types.GET_AWARD,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_AWARD_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.award));
    });
};

export const getAllAward = () => (dispatch) => {
  axios
    .get("/award/getall")
    .then((response) => {
      dispatch({
        type: Types.GET_ALL_AWARD,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_ALL_AWARD_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.award));
    });
};
