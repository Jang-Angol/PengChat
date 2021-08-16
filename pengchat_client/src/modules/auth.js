import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // signup, login
    key, // id, password, passwordConfirm, name, email
    value, // 실제 바꾸려는 값
  })
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // signup, login

const initialState = {
  signup: {
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
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState
);

export default auth;
