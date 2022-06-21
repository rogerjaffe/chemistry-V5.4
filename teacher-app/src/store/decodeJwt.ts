import { Middleware } from "redux";
import { AppStateType } from "../types/AppStateType";
// const jsonwebtoken = require('jsonwebtoken');

const decodeJwt: Middleware<{}, AppStateType> =
  (store) => (next) => (action) => {
    next(action);
  };

export default decodeJwt;
