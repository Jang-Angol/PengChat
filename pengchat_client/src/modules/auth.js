import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_FIELD = "auth/CHANGE_FIELD";

export const sampleAction = createAction(CHANGE_FIELD);

const initialState = {};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, action) => state,
    },
    initialState,
)

export default auth;