import * as Types from "../constants/AdminUserTypes";

const init = {
  isAuthenticate: false,
  user: {},
  allUser: [],
  error: null,
  findMail: false,
  activeAccountMsg: "",
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

    case Types.GETALLUSER: {
      return {
        ...state,
        allUser: action.payload,
      };
    }
    case Types.GETALLUSER_ERROR: {
      return {
        ...state,
        error: action.payload,
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
      };
    }
    default:
      return state;
  }
};

export default userReudcer;
