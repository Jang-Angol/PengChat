import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "@redux-saga/core/effects";

import createRequestSaga, {
  createRequestActionTypes,
} from "../saga/createRequestSaga";
import * as authAPI from "../../lib/api/auth";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("auth/REGISTER");

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/LOGIN");

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // signup, login
    key, // id, password, passwordConfirm, name, email
    value, // 실제 바꾸려는 값
  })
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // signup, login

export const register = createAction(
  REGISTER,
  ({ peng_id, peng_pw, peng_name, peng_email }) => ({
    peng_id,
    peng_pw,
    peng_name,
    peng_email,
  })
);

export const login = createAction(LOGIN, ({ peng_id, peng_pw }) => ({
  peng_id,
  peng_pw,
}));

// 사가 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  register: {
    peng_id: "",
    peng_pw: "",
    peng_pw_check: "",
    peng_name: "",
    peng_email: "",
  },
  login: {
    peng_id: "",
    peng_pw: "",
  },
  auth: null,
  authError: null,
};

const authReducer = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      register: initialState["register"],
      auth: auth,
      authError: null,
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      login: initialState["login"],
      authError: null,
      auth,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default authReducer;
