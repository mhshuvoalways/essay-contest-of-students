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
    case Types.REGISTER_ADMIN: {
      return {
        ...state,
        user: action.payload.user,
        error: null,
      };
    }
    case Types.REGISTER_ADMIN_ERROR: {
      return {
        ...state,
        isAuthenticate: false,
        user: {},
        error: action.payload.error,
      };
    }

    case Types.LOGIN_ADMIN: {
      return {
        ...state,
        isAuthenticate: Object.keys(action.payload.user).length > 0,
        user: action.payload.user,
        error: null,
      };
    }
    case Types.LOGIN_ADMIN_ERROR: {
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
        allUser: action.payload.filter((el) => el.role === "judge"),
      };
    }
    case Types.GETALLUSER_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.APPROVED: {
      const temp = [...state.allUser];
      const findIndex = temp.findIndex((el) => el._id === action.payload._id);
      temp[findIndex] = action.payload;
      return {
        ...state,
        allUser: temp,
      };
    }
    case Types.APPROVED_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.DELETE_JUDGE: {
      const temp = [...state.allUser];
      const findDeleteUser = temp.filter((el) => el._id !== action.payload._id);
      return {
        ...state,
        allUser: findDeleteUser,
      };
    }
    case Types.DELETE_JUDGE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.ACTIVE_ACCOUNT_ADMIN: {
      return {
        ...state,
        activeAccountMsg: action.payload,
      };
    }
    case Types.ACTIVE_ACCOUNT_ADMIN_ERROR: {
      return {
        ...state,
        activeAccountMsg: action.payload,
      };
    }

    case Types.FIND_MAIL_ADMIN: {
      return {
        ...state,
        findMail: action.payload,
      };
    }
    case Types.FIND_MAIL_ADMIN_ERROR: {
      return {
        ...state,
        findMail: action.payload,
      };
    }

    case Types.RECOVER_PASS_ADMIN: {
      return {
        ...state,
        isAuthenticate: Object.keys(action.payload.user).length > 0,
        user: action.payload.user,
        error: null,
      };
    }
    case Types.RECOVER_PASS_ADMIN_ERROR: {
      return {
        ...state,
        isAuthenticate: false,
        user: {},
        error: action.payload.error,
      };
    }

    case Types.ISAUTHENTICATE_ADMIN: {
      return {
        ...state,
        user: action.payload.user,
        isAuthenticate: action.payload.isAuthenticate,
      };
    }
    case Types.LOGOUT_ADMIN: {
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
