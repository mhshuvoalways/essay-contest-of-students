import * as Types from "../constants/AdminUserTypes";
import setAuthToken from "../../utils/setAuthToken";
import axios from "../../utils/axios";
import jwt_decode from "jwt-decode";
import alertAction from "./alertAction";
import enableBtn from "./enableBtnAction";

export const userRegister = (user, navigate) => (dispatch) => {
  axios
    .post("/adminuser/register", user)
    .then((response) => {
      dispatch({
        type: Types.REGISTER_USER,
        payload: {
          user: response.data,
        },
      });
      dispatch(alertAction(response.data.message));
      navigate("/admin/login");
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
    .post("/adminuser/login", user)
    .then((response) => {
      const decoded = jwt_decode(response.data.token);
      dispatch({
        type: Types.LOGIN_USER,
        payload: {
          user: decoded,
        },
      });
      setAuthToken(response.data.token);
      localStorage.setItem("adminToken", response.data.token);
      localStorage.removeItem("token");
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
    .post("/adminuser/active", token)
    .then((response) => {
      dispatch({
        type: Types.ACTIVE_ACCOUNT,
        payload: response.data.message,
      });
      navigate("/admin/login");
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
    .post("/adminuser/findmail", email)
    .then(() => {
      dispatch({
        type: Types.FIND_MAIL,
        payload: true,
      });
      navigate("/admin/checkmsg");
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
      .post("/adminuser/recoverpass", value)
      .then((response) => {
        const decoded = jwt_decode(response.data.token);
        dispatch({
          type: Types.RECOVER_PASS,
          payload: {
            user: decoded,
          },
        });
        setAuthToken(response.data.token);
        localStorage.setItem("adminToken", response.data.token);
        dispatch(alertAction(response.data.message));
        navigate("/admin");
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

export const adminIsAuthenticate = () => (dispatch) => {
  const token = localStorage.getItem("adminToken");
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
      localStorage.removeItem("adminToken");
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

export const getAllUser = () => (dispatch) => {
  axios
    .get("/adminuser/alluser")
    .then((response) => {
      dispatch({
        type: Types.GETALLUSER,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.GETALLUSER_ERROR,
        payload: err.response.data,
      });
      dispatch(alertAction(err.response.data.message));
    });
};

export const approvedJudge = (id) => (dispatch) => {
  axios
    .put("/adminuser/approve/" + id)
    .then((response) => {
      dispatch({
        type: Types.APPROVED,
        payload: response.data.response,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(response.data.message));
    })
    .catch((err) => {
      dispatch({
        type: Types.APPROVED_ERROR,
        payload: err.response.data,
      });
      dispatch(enableBtn(true));
      dispatch(alertAction(err.response.data.message));
    });
};

export const deleteJudge = (id) => (dispatch) => {
  axios
    .delete("/adminuser/delete/" + id)
    .then((response) => {
      dispatch({
        type: Types.DELETE_JUDGE,
        payload: response.data,
      });
      dispatch(enableBtn(true));
    })
    .catch((err) => {
      dispatch({
        type: Types.DELETE_JUDGE_ERROR,
        payload: err.response.data,
      });
      dispatch(enableBtn(true));
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
  localStorage.removeItem("adminToken");
  setAuthToken("");
  navigate("/admin/login");
};
