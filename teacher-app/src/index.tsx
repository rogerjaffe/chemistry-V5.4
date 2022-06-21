import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import api from "./api";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import appReducer from "./store/appReducer";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import thunkMiddleware from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    appState: appReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(thunkMiddleware),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <App />
        </Container>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
