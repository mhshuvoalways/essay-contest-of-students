import * as Types from "../constants/UserTypes";

const init = {
  isAuthenticate: false,
  user: {},
  error: null,
  findMail: false,
  activeAccountMsg: "",
  getAllUser: [],
};

const userReudcer = (state = init, action) => {
  switch (action.type) {
    case Types.REGISTER_USER: {
      return {
        ...state,
        user: action.payload.user,
        error: null,
      };
    }
    case Types.REGISTER_USER_ERROR: {
      return {
        ...state,
        isAuthenticate: false,
        user: {},
        error: action.payload.error,
      };
    }

    case Types.LOGIN_USER: {
      return {
        ...state,
        isAuthenticate: Object.keys(action.payload.user).length > 0,
        user: action.payload.user,
        error: null,
      };
    }
    case Types.LOGIN_USER_ERROR: {
      return {
        ...state,
        isAuthenticate: false,
        user: {},
        error: action.payload.error,
      };
    }

    case Types.ACTIVE_ACCOUNT: {
      return {
        ...state,
        activeAccountMsg: action.payload,
      };
    }
    case Types.ACTIVE_ACCOUNT_ERROR: {
      return {
        ...state,
        activeAccountMsg: action.payload,
      };
    }

    case Types.FIND_MAIL: {
      return {
        ...state,
        findMail: action.payload,
      };
    }
    case Types.FIND_MAIL_ERROR: {
      return {
        ...state,
        findMail: action.payload,
      };
    }

    case Types.GETME: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case Types.GETME_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.GET_ALL_USER: {
      return {
        ...state,
        getAllUser: action.payload,
      };
    }
    case Types.GET_ALL_USER_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.RECOVER_PASS: {
      return {
        ...state,
        isAuthenticate: Object.keys(action.payload.user).length > 0,
        user: action.payload.user,
        error: null,
      };
    }
    case Types.RECOVER_PASS_ERROR: {
      return {
        ...state,
        isAuthenticate: false,
        user: {},
        error: action.payload.error,
      };
    }

    case Types.ISAUTHENTICATE: {
      return {
        ...state,
        user: action.payload.user,
        isAuthenticate: action.payload.isAuthenticate,
      };
    }
    case Types.LOGOUT_USER: {
      return {
        isAuthenticate: action.payload.isAuthenticate,
        user: {},
        error: null,
        findMail: false,
      };
    }

    case Types.FRESH_USER: {
      return {
        isAuthenticate: false,
        user: {},
        error: null,
        findMail: false,
        activeAccountMsg: "",
        getAllUser: [],
      };
    }
    default:
      return state;
  }
};

export default userReudcer;
