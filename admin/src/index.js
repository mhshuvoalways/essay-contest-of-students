import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import setAuthToken from "./utils/setAuthToken";
import { Provider } from "react-redux";
import store from "./store";
import reportWebVitals from "./reportWebVitals";

const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

const adminToken = localStorage.getItem("adminToken");
if (adminToken) {
  setAuthToken(adminToken);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
