import * as Types from "../constants/UserTypes";
import setAuthToken from "../../utils/setAuthToken";
import axios from "../../utils/axios";
import jwt_decode from "jwt-decode";
import alertAction from "./alertAction";
import enableBtn from "./enableBtnAction";

export const userRegister = (user, navigate) => (dispatch) => {
  axios
    .post("/user/register", user)
    .then((response) => {
      dispatch({
        type: Types.REGISTER_USER,
        payload: {
          user: response.data,
        },
      });
      dispatch(alertAction(response.data.message));
      navigate("/login");
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.REGISTER_USER_ERROR,
        payload: {
          error: err.response.data,
        },
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.name));
      dispatch(alertAction(err.response.data.phone));
      dispatch(alertAction(err.response.data.country));
      dispatch(alertAction(err.response.data.age));
      dispatch(alertAction(err.response.data.password));
      dispatch(alertAction(err.response.data.recaptch));
      dispatch(alertAction(err.response.data.message));
    });
};

export const userLogin = (user, navigate, form) => (dispatch) => {
  axios
    .post("/user/login", user)
    .then((response) => {
      const decoded = jwt_decode(response.data.token);
      dispatch({
        type: Types.LOGIN_USER,
        payload: {
          user: decoded,
        },
      });
      setAuthToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.removeItem("adminToken");
      dispatch(alertAction(response.data.message));
      navigate(form, { replace: true });
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.LOGIN_USER_ERROR,
        payload: {
          error: err.response,
        },
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.password));
      dispatch(alertAction(err.response.data.message));
    });
};

export const activeAccount = (token, navigate) => (dispatch) => {
  axios
    .post("/user/active", token)
    .then((response) => {
      dispatch({
        type: Types.ACTIVE_ACCOUNT,
        payload: response.data.message,
      });
      navigate("/login");
    })
    .catch((err) => {
      dispatch({
        type: Types.ACTIVE_ACCOUNT_ERROR,
        payload: err.response.data.message,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const findMail = (email, navigate) => (dispatch) => {
  axios
    .post("/user/findmail", email)
    .then(() => {
      dispatch({
        type: Types.FIND_MAIL,
        payload: true,
      });
      navigate("/checkmsg");
    })
    .catch((err) => {
      dispatch({
        type: Types.FIND_MAIL_ERROR,
        payload: false,
      });
      dispatch(alertAction(err.response.data.email));
      dispatch(alertAction(err.response.data.message));
    });
};

export const recoverPass = (value, navigate) => (dispatch) => {
  if (value.password === value.confirmPassword) {
    axios
      .post("/user/recoverpass", value)
      .then((response) => {
        const decoded = jwt_decode(response.data.token);
        dispatch({
          type: Types.RECOVER_PASS,
          payload: {
            user: decoded,
          },
        });
        setAuthToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        dispatch(alertAction(response.data.message));
        navigate("/");
      })
      .catch((err) => {
        dispatch({
          type: Types.RECOVER_PASS_ERROR,
          payload: {
            error: err.response,
          },
        });
        dispatch(alertAction(err.response.data.password));
        dispatch(alertAction(err.response.data.message));
      });
  } else {
    dispatch(alertAction("New password and confirm password don't match"));
  }
};

export const isAuthenticate = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const decoded = jwt_decode(token);
    const dateNow = new Date();
    if (decoded.exp * 1000 < dateNow.getTime()) {
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: {
          isAuthenticate: false,
        },
      });
      localStorage.removeItem("token");
    } else {
      dispatch({
        type: Types.ISAUTHENTICATE,
        payload: {
          user: decoded,
          isAuthenticate: true,
        },
      });
    }
  } else {
    dispatch({
      type: Types.ISAUTHENTICATE,
      payload: {
        isAuthenticate: false,
      },
    });
  }
};

export const getMe = () => (dispatch) => {
  axios
    .get("/user/getme")
    .then((response) => {
      dispatch({
        type: Types.GETME,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GETME_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const freshData = () => (dispatch) => {
  dispatch({
    type: Types.FRESH_USER,
  });
};

export const logout = (navigate) => (dispatch) => {
  dispatch({
    type: Types.LOGOUT_USER,
    payload: {
      isAuthenticate: false,
    },
  });
  localStorage.removeItem("token");
  setAuthToken("");
  navigate("/login");
};
