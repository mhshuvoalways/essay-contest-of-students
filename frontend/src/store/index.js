import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userReducer";
import adminUserReducer from "./reducers/adminUserReducer";
import quarterlyAnnounceReducer from "./reducers/quarterlyAnnounceReducer";
import articleReducer from "./reducers/articleReducer";
import gradeReducer from "./reducers/gradeReducer";

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
  alertReducer,
});

const store = createStore(rootReducer, composedEnhancers);

export default store;
