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
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.name));
      dispatch(alertAction(err.response.data.phone));
      dispatch(alertAction(err.response.data.message));
    });
};
