import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userReducer";
import adminUserReducer from "./reducers/adminUserReducer";
import quarterlyAnnounceReducer from "./reducers/quarterlyAnnounceReducer";
import articleReducer from "./reducers/articleReducer";
import gradeReducer from "./reducers/gradeReducer";
import isPaySubmitReducer from "./reducers/isPaySubmitReducer";
import enableBtnReducer from "./reducers/enableBtnReducer";
import paymentReducer from "./reducers/paymentReducer";
import awardReducer from "./reducers/awardReducer";
import authorReducer from "./reducers/authorReducer";

import alertReducer from "./reducers/alertReducer";
import thunk from "redux-thunk";

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);
const rootReducer = combineReducers({
  userReducer,
  adminUserReducer,
  quarterlyAnnounceReducer,
  articleReducer,
  gradeReducer,
  isPaySubmitReducer,
  enableBtnReducer,
  alertReducer,
  paymentReducer,
  awardReducer,
  authorReducer,
});

const store = createStore(rootReducer, composedEnhancers);

export default store;
