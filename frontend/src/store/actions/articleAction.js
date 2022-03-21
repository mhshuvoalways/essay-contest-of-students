import * as Types from "../constants/ArticleTypes";
import axios from "../../utils/axios";
import alertAction from "./alertAction";

export const articlePost = (article, navigation) => (dispatch) => {
  axios
    .post("/article/postarticle", article)
    .then((response) => {
      dispatch({
        type: Types.POST_ARTICLE,
        payload: response.data.response,
      });
      dispatch(alertAction(response.data.message));
      navigation("/result");
    })
    .catch((err) => {
      dispatch({
        type: Types.POST_ARTICLE_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.language));
      dispatch(alertAction(err.response.data.typeofArticle));
      dispatch(alertAction(err.response.data.article));
      dispatch(alertAction(err.response.data.message));
    });
};

export const articleUpdate = (article, id) => (dispatch) => {
  axios
    .put("/article/update/" + id, article)
    .then((response) => {
      dispatch({
        type: Types.UPDATE_ARTICLE,
        payload: response.data,
      });
      dispatch(modalToggle());
    })
    .catch((err) => {
      dispatch({
        type: Types.UPDATE_ARTICLE_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const getMyArticle = () => (dispatch) => {
  axios
    .get("/article/getmyarticles")
    .then((response) => {
      dispatch({
        type: Types.GET_MY_ARTICLE,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_MYARTICLE_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const getArticle = () => (dispatch) => {
  axios
    .get("/article/getarticles")
    .then((response) => {
      dispatch({
        type: Types.GET_ARTICLES,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_MYARTICLE_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const deleteArticle = (id) => (dispatch) => {
  axios
    .delete("/article/delete/" + id)
    .then((response) => {
      dispatch({
        type: Types.DELETE_ARTICLES,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.DELETE_ARTICLES_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const getIndividualActicle = (id) => (dispatch) => {
  axios
    .get("/article/getarticle/" + id)
    .then((response) => {
      dispatch({
        type: Types.GET_INDIVIDUAL_ARTICLES,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GET_INDIVIDUAL_ARTICLES_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const modalToggle = () => (dispatch) => {
  dispatch({
    type: Types.MODAL_TOGGLE,
  });
};

export const enableBtn = () => (dispatch) => {
  dispatch({
    type: Types.ENABLE_BTN,
  });
};
