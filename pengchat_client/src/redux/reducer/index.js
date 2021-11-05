import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import authReducer, { authSaga } from "./authReducer";
import loadingReducer from "./loadingReducer";
import userReducer, { userSaga } from "./userReducer";

const rootReducer = combineReducers({
  authReducer,
  loadingReducer,
  userReducer,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
