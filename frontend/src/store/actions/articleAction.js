import * as Types from "../constants/ArticleTypes";
import axios from "../../utils/axios";
import alertAction from "./alertAction";

export const articlePost = (article) => (dispatch) => {
  axios
    .post("/article/postarticle", article)
    .then((response) => {
      dispatch({
        type: Types.POST_ARTICLE,
        payload: response.data,
      });
      dispatch(alertAction(response.data.message));
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
