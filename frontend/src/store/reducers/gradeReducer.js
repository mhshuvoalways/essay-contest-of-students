import * as Types from "../constants/GradeTypes";

const init = {
  grade: [],
  error: null,
  modal: false,
  updateId: "",
};

const articleReudcer = (state = init, action) => {
  switch (action.type) {
    case Types.ADD_GRADE: {
      const temp = [...state.grade, action.payload];
      return {
        ...state,
        grade: temp,
        modal: false,
        error: null,
      };
    }
    case Types.ADD_GRADE_ERROR: {
      return {
        ...state,
        modal: false,
        error: action.payload,
      };
    }
    case Types.GET_GRADE: {
      return {
        ...state,
        grade: action.payload,
        error: null,
      };
    }
    case Types.GET_GRADE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.UPDATE_GRADE: {
      const temp = [...state.grade];
      const findIndex = temp.findIndex((el) => el._id === action.payload._id);
      temp[findIndex] = action.payload;
      return {
        ...state,
        grade: temp,
        modal: false,
        error: null,
      };
    }
    case Types.UPDATE_GRADE_ERROR: {
      return {
        ...state,
        modal: false,
        error: action.payload,
      };
    }

    case Types.DELETE_GRADE: {
      const temp = [...state.grade];
      const removeItem = temp.filter((el) => el._id !== action.payload._id);
      return {
        ...state,
        grade: removeItem,
        error: null,
      };
    }
    case Types.DELETE_GRADE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.MODAL_TOGGLE_GRADE: {
      return {
        ...state,
        modal: action.payload.value,
        updateId: action.payload.id,
      };
    }

    default:
      return state;
  }
};

export default articleReudcer;
