import * as Types from "../constants/AuthorTypes";
import axios from "../../utils/axios";
import alertAction from "./alertAction";
import enableBtn from "./enableBtnAction";

export const giveAuthor = (author) => (dispatch) => {
  axios
    .post("/author/add", author)
    .then((response) => {
      dispatch({
        type: Types.GIVE_AUTHOR,
        payload: response.data.response,
      });
      dispatch(alertAction(response.data.message));
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.GIVE_AUTHOR_ERROR,
        payload: err.response.data,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.message));
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.award));
    });
};

export const getAuthor = () => (dispatch) => {
  axios
    .get("/author/get")
    .then((response) => {
      dispatch({
        type: Types.GET_AUTHOR,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_AUTHOR_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.award));
    });
};

export const getAllAuthor = () => (dispatch) => {
  axios
    .get("/author/getall")
    .then((response) => {
      dispatch({
        type: Types.GET_ALL_AUTHOR,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_ALL_AUTHOR_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.award));
    });
};
