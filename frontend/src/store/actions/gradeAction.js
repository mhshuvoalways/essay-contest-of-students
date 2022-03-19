import * as Types from "../constants//GradeTypes";
import axios from "../../utils/axios";
import alertAction from "./alertAction";

export const gradeAdd = (grade) => (dispatch) => {
  axios
    .post("/grade/add", grade)
    .then((response) => {
      dispatch({
        type: Types.ADD_GRADE,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.ADD_GRADE_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const gradeGet = () => (dispatch) => {
  axios
    .get("/grade/get")
    .then((response) => {
      dispatch({
        type: Types.GET_GRADE,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_GRADE_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const gradeUpdate = (id, grade) => (dispatch) => {
  axios
    .put("/grade/update/" + id, grade)
    .then((response) => {
      dispatch({
        type: Types.UPDATE_GRADE,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.UPDATE_GRADE_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const gradeDelete = (id) => (dispatch) => {
  axios
    .delete("/grade/delete/" + id)
    .then((response) => {
      dispatch({
        type: Types.DELETE_GRADE,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.DELETE_GRADE_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const modalToggle = (id) => (dispatch) => {
  dispatch({
    type: Types.MODAL_TOGGLE,
    payload: id,
  });
};
