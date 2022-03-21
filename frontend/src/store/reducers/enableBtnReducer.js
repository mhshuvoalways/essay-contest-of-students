import * as Types from "../constants/EnableBtnType";

const alertReducer = (state = true, action) => {
  switch (action.type) {
    case Types.ENABLE_BTN: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default alertReducer;
